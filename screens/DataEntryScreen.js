import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function DataEntryScreen({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Map', { name, surname, latitude, longitude });
  };
//ANGELO ANDRES VARGAS COMPRE 2021-0298
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Nombre" onChangeText={setName} value={name} style={styles.input} />
        <TextInput placeholder="Apellido" onChangeText={setSurname} value={surname} style={styles.input} />
        <TextInput placeholder="Latitud" onChangeText={setLatitude} value={latitude} keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Longitud" onChangeText={setLongitude} value={longitude} keyboardType="numeric" style={styles.input} />
      </View>
      <Button title="Siguiente" onPress={handleSubmit} />
    </View>
  );
}
//ANGELO ANDRES VARGAS COMPRE 2021-0298
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default DataEntryScreen;