import { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { getQRCode } from '../core/services/spots.service';

export default function Map() {
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef(null);
  const [latitudeMap, setLatitudeMap] = useState(43.640199);
  const [longitudeMap, setLongitudeMap] = useState(5.097022);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitudeMap(location.coords.latitude);
      setLongitudeMap(location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    // Créer les marqueurs en boucle à partir du tableau de données
    const createMarkers = async () => {
      const data = await getQRCode();
      const newMarkers = data.map((item) => ({
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
      }));
      setMarkers(newMarkers);
    };

    createMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        userLocationPriority='high'
        showsUserLocation={true}
        region={{
          latitude: latitudeMap,
          longitude: longitudeMap,
          latitudeDelta: 0.10,
          longitudeDelta: 0.10,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
