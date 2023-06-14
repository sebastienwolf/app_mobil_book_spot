import { StyleSheet, View } from "react-native";
import Map from "../../components/Map";
import { Text as TextPaper, Card } from 'react-native-paper';
import { Stack } from 'expo-router';


export default function Page() {
  return (

    <View style={styles.container}>
      <Stack.Screen options={{
        title: "Carte des boites"
      }} />

      <View style={styles.main}>
        <View style={styles.title}>
          <TextPaper style={styles.text} variant="headlineMedium">Les boites de la ville</TextPaper>
          <TextPaper style={styles.text} variant="bodyLarge">Veuillez sélectionner votre boîte pour voir les livres qui s'y trouvent.</TextPaper>
        </View>
        <View style={styles.map}>
          <Map />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  main: {
    gap: 30,
    Width: "100%",
    marginHorizontal: "auto",
  },
  map: {
    height: 500,
    width: 300,
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    alignItems: 'center', // Pour centrer horizontalement le texte dans la largeur
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  row: {
    margin: 10,
    Width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picture: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderColor: 'gray',
    borderWidth: 1,
  },
  h2: {
    textAlign: "center"
  }

});