import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Scanner from "../../../components/Scanner"
import TextEntryComponent from "../../../components/TextInput";
import { getService } from '../../../core/services/get.service';
import Button from "../../../components/Button";


export default function Page() {

  const [data, setData] = useState("")
  const [idSpot, setIdSpot] = useState("")
  const [url, setUrl] = useState("")
  idSpot

  const onChange = async ({ data }) => {
    setData(data)
    const dataUser =  await getService(data)

    setIdSpot(data.id)
     
    setUrl("/scan/" + dataUser.id)
    console.log("url",url)
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Scanner votre Carte d'identification</Text>
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