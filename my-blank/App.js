/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

/* Componente personalizado */
const Texto = () => {
  const [contenido, setContenido] = useState('hola mundo React');
  const actualizarTexto = () => {
    setContenido('estado actualizado');
  };
  return (
    <Text style={styles.text} onPress={actualizarTexto}>
      {contenido}
    </Text>
  );
};

/* zona 2 , el main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
      <Texto />
      <Texto />
      <Button title="Presioname!" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

/* zona 3, estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});