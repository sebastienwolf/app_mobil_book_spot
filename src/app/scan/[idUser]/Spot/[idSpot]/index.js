import { StyleSheet, Text, Image, View, ScrollView } from "react-native";



export default function Page() {

  return (
    <ScrollView>
      <View style={styles.container}>

          <Text style={styles.title}>Scanner votre Livre</Text>

      </View>
    </ScrollView>
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
  scanner: {
    width: 150,
    height: 150,
  },
  row: {
    margin:10,
    Width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});