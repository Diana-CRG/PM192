/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';

const Texto=()=>{
  const [contenido, setContenido]=useState('hola mundo React')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(<Text onPress={actualizarTexto}>{contenido}</Text>) 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Texto></Texto>
        <Texto></Texto>
        <Texto></Texto>
        
      <Button title='Presioname!'></Button>
      
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
});