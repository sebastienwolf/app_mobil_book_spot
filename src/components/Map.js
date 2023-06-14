import { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { getQRCode } from '../core/services/spots.service';
import Button from "../components/Button";

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
    const createMarkers = async () => {
      const data = await getQRCode();
      const newMarkers = data.map((item) => ({
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
        title: item.name,
        street: item.street,
        city: item.cp + " " + item.city,
      }));
      setMarkers(newMarkers);
    };

    createMarkers();
  }, []);

  const handleMarkerPress = (id) => {
    console.log("route spot", "/spot/" + id);
    router.push("/spot/" + id);
  };

  const handleButtonPress = (id) => {
    handleMarkerPress(id);
  };

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
          >
            <Callout  onPress={() => handleButtonPress(marker.id)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{marker.street}</Text>
                <Text style={styles.calloutText}>{marker.title}</Text>
                <Text style={styles.calloutText}>{marker.city}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                   
                  >
                    <Text style={styles.buttonText}>voir les livres</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Callout>
          </Marker>
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
  button: {
    backgroundColor: "#F08488",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  calloutText: {
    textAlign: 'center',
    marginBottom: 2,
  },
  calloutContainer: {
    padding: 10,
    minWidth: 150,
  },
});
