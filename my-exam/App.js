import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';

// 🔑 Claves necesarias
const API_KEY_WEATHER = 'TU_API_KEY_DE_WEATHERAPI'; // ← remplaza aquí
const RAPIDAPI_KEY = 'TU_API_KEY_DE_RAPIDAPI';      // ← remplaza aquí
const RAPIDAPI_HOST = 'wft-geo-db.p.rapidapi.com';

export default function App() {
  const [ciudad, setCiudad] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [ciudadesClima, setCiudadesClima] = useState([]);
  const [cargando, setCargando] = useState(false);

  const buscarSugerencias = async (texto) => {
    setCiudad(texto);
    if (texto.length < 3) {
      setSugerencias([]);
      return;
    }

    try {
      const respuesta = await fetch(
        `https://${RAPIDAPI_HOST}/v1/geo/cities?namePrefix=${texto}&limit=10&sort=-population`,
        {
          headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST,
          },
        }
      );

      const datos = await respuesta.json();
      setSugerencias(datos.data);
    } catch (error) {
      console.error('Error en búsqueda de ciudades:', error);
      setSugerencias([]);
    }
  };

  const obtenerClima = async (coordenadas, nombreCiudad, region, pais) => {
    setCargando(true);
    setSugerencias([]);
    Keyboard.dismiss();

    try {
      const respuesta = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${coordenadas}&lang=es`
      );

      if (!respuesta.ok) {
        throw new Error('No se pudo obtener el clima');
      }

      const datos = await respuesta.json();

      const infoClima = {
        id: Date.now(),
        nombre: `${nombreCiudad}, ${region}, ${pais}`,
        temperatura: datos.current.temp_c,
        condicion: datos.current.condition.text,
        icono: `https:${datos.current.condition.icon}`,
      };

      setCiudadesClima([infoClima, ...ciudadesClima]);
      setCiudad('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setCargando(false);
    }
  };

  const limpiarCiudades = () => {
    setCiudadesClima([]);
  };

  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>🌦️ App del Clima</Text>

        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa ciudad, municipio o pueblo"
            placeholderTextColor="#888"
            value={ciudad}
            onChangeText={buscarSugerencias}
          />
          {sugerencias.length > 0 && (
            <View style={styles.sugerencias}>
              <FlatList
                data={sugerencias}
                keyExtractor={(item) => item.id?.toString() || item.city + item.country}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      obtenerClima(
                        `${item.latitude},${item.longitude}`,
                        item.city,
                        item.region,
                        item.country
                      )
                    }
                    style={styles.sugerenciaItem}
                  >
                    <Text style={styles.sugerenciaTexto}>
                      {item.city}, {item.region}, {item.country}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
          <Button
            title="Buscar clima"
            onPress={() => Alert.alert('Selecciona una ciudad de la lista')}
            color="#0066cc"
          />
        </View>

        {cargando && (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 10 }} />
        )}

        <ScrollView style={styles.lista}>
          {ciudadesClima.map((ciudad) => (
            <View key={ciudad.id} style={styles.ciudadCard}>
              <Text style={styles.nombreCiudad}>{ciudad.nombre}</Text>
              <Image source={{ uri: ciudad.icono }} style={styles.icono} />
              <Text style={styles.temperatura}>{ciudad.temperatura}°C</Text>
              <Text style={styles.condicion}>{ciudad.condicion}</Text>
            </View>
          ))}
        </ScrollView>

        {ciudadesClima.length > 0 && (
          <TouchableOpacity onPress={limpiarCiudades} style={styles.botonLimpiar}>
            <Text style={styles.textoLimpiar}>Limpiar Ciudades</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  formulario: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  sugerencias: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 150,
    marginBottom: 10,
  },
  sugerenciaItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sugerenciaTexto: {
    fontSize: 16,
    color: '#000',
  },
  lista: {
    flex: 1,
  },
  ciudadCard: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  nombreCiudad: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  icono: {
    width: 60,
    height: 60,
  },
  temperatura: {
    fontSize: 22,
    color: '#000',
  },
  condicion: {
    fontStyle: 'italic',
    color: '#333',
  },
  botonLimpiar: {
    backgroundColor: '#cc0000',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoLimpiar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
