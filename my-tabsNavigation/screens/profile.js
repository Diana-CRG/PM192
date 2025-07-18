import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Asegúrate de que 'navigation' se reciba como prop
export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil usuario</Text>
     
           <Pressable
             style={[styles.button, styles.buttonSettings]}
             onPress={() => navigation.navigate('Detalles')}
           >
             <Text style={styles.buttonText}>Detalles usuario</Text>
           </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10, // Espacio entre el icono y el texto
    marginBottom: 30, // Espacio entre el texto y el botón
  },
  button: {
    backgroundColor: '#007BFF', // Color azul para el botón
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});