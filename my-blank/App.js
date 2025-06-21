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
    width: 250,
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
    color: '#345676',
    fontSize: 18,
  },
  imagen: {
    width: 100,
    height: 100,
  },
});
