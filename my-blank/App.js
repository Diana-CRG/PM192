import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [activarSwitch, setActivarSwitch] = useState(false);

  
   

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.contenedor, modoOscuro && styles.fondoOscuro]}>
         <Text style={[styles.titulo, modoOscuro && styles.textoClaro]}>
            Práctica con Switch
         </Text>


        {/* Primer switch */}
        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Activar switch 2
          </Text>
          <Switch
            value={activarSwitch}
            onValueChange={setActivarSwitch}
            trackColor={{ false: '#ccc', true: '#4caf50' }}
            thumbColor={activarSwitch ? '#ffffff' : '#999999'}
          />
        </View>

        {/* Switch para modo oscuro */}
        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Modo oscuro
          </Text>
          <Switch
            value={modoOscuro}
            onValueChange={setModoOscuro}
            disabled={!activarSwitch}
            trackColor={
              !activarSwitch
                ? { false: '#ff9999', true: '#ff3b30' }
                : { false: '#ccc', true: '#4caf50' }
            }
            thumbColor={
              !activarSwitch
                ? '#ff3b30'
                : modoOscuro
                ? '#ffffff'
                : '#999999'
            }
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  fondoOscuro: {
    backgroundColor: '#1a1a1a',
  },
  textoClaro: {
    color: '#ffffff', // solo uno definido
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 18,
  },
});
