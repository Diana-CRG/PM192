// Zona 1: Importaciones
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Switch, Image, SafeAreaView,
} from 'react-native';

// Componente de Splash Screen
const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image source={require('./assets/splash.jpg')} style={styles.logoSplash} />
      <Text style={styles.splashText}>¡Bienvenido!</Text>
    </View>
  );
};

// Zona 2: Main
export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 3000); // Splash de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  const manejarRegistro = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      Alert.alert('Campos Vacíos', 'Por favor, llena todos los campos.');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert(
      'Registro Exitoso',
      `Nombre: ${nombre}\nCorreo: ${correo}`
    );
  };

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/fondo.jpg')}
        style={styles.fondo}
        resizeMode="cover"
      >
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#555"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#555"
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
            <Text style={styles.switchLabel}>Acepto los términos y condiciones</Text>
          </View>

          <Button title="Registrarse" onPress={manejarRegistro} color="#4CAF50" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
  },
  formulario: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    color: '#333',
    fontSize: 16,
  },
  // Splash
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#012677',
  },
  logoSplash: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
