/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

/* Zona 2: Componente hijo con PROPS */
const IndicadorCarga = ({ color, size }) => {
  return <ActivityIndicator style={styles.indicador} color={color} size={size} />;
};

/* Zona 3: Componente principal */
export default function App() {
  const [cargando, setCargando] = useState(false); // STATE

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000); // Simulación de carga
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Uso de ActivityIndicator</Text>

      {cargando ? (
        <IndicadorCarga color="deepskyblue" size="large" /> // PROPS enviados
      ) : (
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
    backgroundColor: '#ccff90', // Verde limón
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
    marginBottom: 20,
  },
});
