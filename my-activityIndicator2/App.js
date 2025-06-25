/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar'; // permite personalizar la barra de estado del sistema, que es la parte superior del dispositivo donde está la hora, batería, señal, etc.
import React, { useState } from 'react';  //React es obligatorio para JSX. useState maneja el estado de cargando
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';//Son los componentes base para diseño y texto.Es el spinner de carga que se muestra al presionar el botón.

/* Zona 2: Componente hijo con PROPS */
//Es un componente reutilizable que recibe color y size como props para mostrar un spinner (círculo de carga) con esos estilos.
const IndicadorCarga = ({ color, size }) => { 
  return <ActivityIndicator style={styles.indicador} color={color} size={size} />;
};

/* Zona 3: Componente principal */
//Guarda si estamos cargando (true) o no (false). Cuando el usuario presiona el botón, 
// cambia a true y luego regresa a false después de 3 segundos.
export default function App() {
  const [cargando, setCargando] = useState(false); // 

//Funcion de carga
  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000); // Simulación de carga. Simula una carga de datos por 3 segundos. Después de eso, se oculta el ActivityIndicator.
  };

  //Renderizado
  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Uso de ActivityIndicator</Text>

        
      {cargando ? (
        <IndicadorCarga color="tomato" size="large" /> // PROPS enviados
      ) : ( //Si cargando es true, se muestra el spinner. Si no, se muestra un mensaje.
        <Text style={styles.textoSecundario}>Presiona el botón para comenzar</Text>
      )}

      {/* Botón coral (el color se pasa como prop directamente) */}
      <Button title="Iniciar carga" onPress={iniciarCarga} color="#ff6f61" />

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 4: Estilos con StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccff90', // Fondo Verde limón
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2e2e2e', // gris oscuro para contraste
  },
  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: '#3a3a3a',
  },
  indicador: {
    marginBottom: 20, //Da espacio debajo del ActivityIndicator para que no se junte con el botón.
  },
});
