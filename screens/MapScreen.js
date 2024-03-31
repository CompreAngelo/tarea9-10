// screens/MapScreen.js
//ANGELO ANDRES VARGAS COMPRE 2021-0298
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function MapScreen({ route }) {
  const { name, surname, latitude, longitude } = route.params;

  const handlePressMarker = () => {
    alert(`Nombre: ${name} ${surname}\nUbicación: ${latitude}, ${longitude}`);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker
          coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }}
          title={`${name} ${surname}`}
          description={`Lat: ${latitude}, Long: ${longitude}`}
          onPress={handlePressMarker}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
