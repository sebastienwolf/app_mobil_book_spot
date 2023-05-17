import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Scanner from "../../components/Scanner"
import TextEntryComponent from "../../components/TextInput";
import { getService } from '../../core/services/get.service';
// import Button from "../../components/Button";


export default function Page() {

  const [data, setData] = useState("data")
  const [firstName, setFirstName] = useState("")
  const [name, setName] = useState("")


  const onChange = async ({ data }) => {
    setData(data)
       
    const dataUser =  await getService(data)
    setFirstName(dataUser.prenom)
    setName(dataUser.nom)
     
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

              <View style={styles.row}>                
                <TextEntryComponent
                  value={firstName}
                  editable={false}
                  style={{ 
                    marginLeft: 2,
                     marginRight: 2,
                  }} />
                <TextEntryComponent
                  value={name}
                  editable={false}
                  style={{ 
                    marginLeft: 2,
                     marginRight: 2,
                  }} />
              </View>
        <View style={styles.row}>
            <Button
              route="/scan-user"
              title="Scanner votre carte"
            />
          


        </View>
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