/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';

const Texto=({style})=>{ //pasamo el parametro style 
  const[contenido, setContenido]=useState('Hola mundo React')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(
        <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>) //lo definimos en el componente padre 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.blue}>  </Texto>
      <Texto style={styles.orange}> </Texto>
      <Texto style={styles.pink}>  </Texto>
      <Button title='Presioname!'></Button>
      <StatusBar style="auto" />
    </View>
  );
}


/* zona 3, estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'base-line',
    justifyContent: 'center',
    flexDirection: 'column',
  },
text:{
  color:'white',
  fontSize:25,
  height:100, /*de lo que se tenga disponible*/
  /*width:100, nos va a crear el alto y ancho para cada texto*/

},
red:{backgroundColor:'blue'},
green:{backgroundColor:'orange'},// se creo una clase para que sea de diferente como cada texto 
blue:{backgroundColor:'pink'}, //agregamos el flex en cada clase 
});