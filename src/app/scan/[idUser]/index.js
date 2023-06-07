import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import Scanner from "../../../components/Tata"
import TextEntryComponent from "../../../components/TextInput";
import Button from "../../../components/Button";



export default function Page() {

  const { idUser } = useLocalSearchParams()
  console.log(idUser)

  const [data, setData] = useState("data")
  const [idSpot, setIdSpot] = useState("")
  const [url, setUrl] = useState("")


  const onChange = async ({ data }) => {
    setData(data)
    console.log(data.id)
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Stack.Screen
            options={{ title: "scan/user/" + idUser }}
          />

          <Text style={styles.title}>Scanner le QR code de la boite</Text>
          <Scanner
            onChange={onChange}
            style={styles.scaner}
          />
        </View>

        {idSpot ?
          <>
            <View style={styles.row}>
              <TextEntryComponent
                value={idSpot}
                editable={false} />
            </View>
            <View style={styles.row}>
              <Button
                route={url}
                title="Scanner le livre"
              />
            </View>
          </>
          : null}
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
    textAlign: "center"
  },
  scanner: {
    width: 150,
    height: 150,
  },
  row: {
    margin: 10,
    Width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});