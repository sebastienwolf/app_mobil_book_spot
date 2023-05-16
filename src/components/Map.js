import {useState, useEffect, useRef } from 'react';
import MapView, {Marker, Geojson} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {

  const [longitudeMarker, setLongitudeMarker] = useState(48.85);
  const [latitudeMarker, setLatitudeMarker] = useState(2.34);
  const mapRef = useRef(null);
  const [longitudeMap, setLongitudeMap] = useState(48.85);
  const [latitudeMap, setLatitudeMap] = useState(2.34);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitudeMarker(location.coords.latitude)
      setLongitudeMarker(location.coords.longitude)

      setLatitudeMap(location.coords.latitude)
      setLongitudeMap(location.coords.longitude)

      await returnAdress(location.coords)
      
    })
    ();
  }, []);

  const returnAdress = async(location) => {
    let getAdress = await Location.reverseGeocodeAsync({
      longitude: location.longitude,
      latitude: location.latitude,
    })
  } 

  return (
    <View style={styles.container}>
        <MapView style={styles.map}
          ref = {mapRef}
          userLocationPriority = 'high'
          showsUserLocation = {true}
          region= {{
            latitude: latitudeMap,
            longitude: longitudeMap,
            latitudeDelta: 0.10,
            longitudeDelta: 0.10,
          }}
              onPress = { (coordonne) => {
                  setLatitudeMarker(coordonne.nativeEvent.coordinate.latitude)
                  setLongitudeMarker(coordonne.nativeEvent.coordinate.longitude)
                  returnAdress(coordonne.nativeEvent.coordinate)

                  mapRef.current?.animateToRegion({
                    latitude: coordonne.nativeEvent.coordinate.latitude,
                    longitude: coordonne.nativeEvent.coordinate.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }, 1000)
                  
              }}>


            <Marker
            coordinate={{latitude: latitudeMarker, longitude: longitudeMarker}}
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
    width: '100%',
    height: '100%',
  },
});