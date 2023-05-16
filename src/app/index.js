import { StyleSheet, Text, Image, View } from "react-native";
import logo from "../../assets/pictures/logo2.png";


export default function Page() {
  return (
      <View style={styles.container}>
          <View style={styles.main}>
              <Image source={logo} style={{ height: 200, maxWidth: "100%", resizeMode: "contain" }} />
              <Text style={styles.title}>Service des boites à livre</Text>
              <Text style={styles.subtitle}>
                    Bienvenue sur le service des boites à livre de Salon de Provence.
                    Vous pourrez trouver les boites disséminer dans la ville.
                    Vous pourrez ainsi voir les livres qui s'y trouvent grâce à notre application.
              </Text>
              <Text style={styles.subtitle}>
                    Pour récupérer un livre ou en déposer dans les boites, penser à venir à l'hôtel
                     de ville de ville pour récupérer votre carte d'identification pour les utiliser.
              </Text>
              <Text style={styles.subtitle}>
                    Bonne lecture de la part du Mme la Maire
              </Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    gap: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center"
  },
  subtitle: {
    textAlign:"center",
    fontSize: 20,
    color: "#38434D",
  },
});