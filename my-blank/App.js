import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* PRIMER BOTÓN - Alert simple */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Presióname"
          color="#841584"
          onPress={() => alert('Me presionaste =p')}
        />
      </View>

      {/* SEGUNDO BOTÓN - Se desactiva al presionarse */}
      <View style={styles.buttonWrapper}>
        <Button
          title={botonDesactivado ? 'Desactivado' : 'Desactivame'}
          disabled={botonDesactivado}
          onPress={() => setBotonDesactivado(true)}
          color="#999999"
        />
      </View>

      {/* TERCER BOTÓN - Botones izquierdo y derecho */}
      <View style={styles.botonJustificado}>
        <Button
          title="Left button"
          color="#674323"
          onPress={() => Alert.alert('Botón izquierdo presionado')}
        />
        <Button
          title="Right button"
          color="#097865"
          onPress={() => Alert.alert('Botón derecho presionado')}
        />
      </View>

      {/* CUARTO BOTÓN - Contador con TouchableOpacity */}
      <TouchableOpacity
        style={styles.dynamicButton}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.dynamicText}>
          Contador: {contador}
        </Text>
      </TouchableOpacity>

      {/* QUINTO BOTÓN - Imagen presionable (pokebola) */}
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => alert('La pokebola ha sido presionada')}
      >
        <Image
          source={require('./assets/pokebola.png')}
          style={styles.imagen}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 15,
  },
  botonJustificado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 15,
  },
  dynamicButton: {
    padding: 10,
    marginTop: 15,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center',
  },
  dynamicText: {
    color: '#fff',
    fontSize: 18,
  },
  imagen: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
});
