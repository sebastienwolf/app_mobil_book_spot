import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import Map from "../../components/Map";
import { useState } from 'react';


export default function Page() {

    const [latitude, setLatitude] = useState("latitude")
    const [longitude, setLongitude] = useState("longitude")
    const [adress, setAdress] = useState("adress")
  
    const [imageUri, setImageUri] = useState(null);
  
    const handlePictureTaken = (image) => {
      setImageUri(image.uri);
    };
  
    const onChange = ({ latitude, longitude, adress }) => {
      setLatitude(latitude)
      setLongitude(longitude)
      setAdress(adress)
    };
  
    const deletePicture = ()=>{
      setImageUri(null)
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>carte des boites</Text>
                <View style={styles.map}>
                    <Map/>
                </View>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      alignItems: "center",
      padding:20
      
    },
    main: {
      Width: "100%",
      marginHorizontal: "auto",
    },
    map: {
      height: 300,
    },
    title: {
      flexDirection: 'row',
      fontSize: 40,
      width:"100%",
      fontWeight: "bold",
      textAlign: "center"
      
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    row: {
      margin:10,
      Width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    picture: {
      flex:1,
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
      borderColor: 'gray',
      borderWidth: 1,
    },
    h2: {
      textAlign: "center"
    }
  
  });