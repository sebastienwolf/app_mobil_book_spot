import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getService } from "../../core/services/get.service";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idSpot, setIdSpot] = useState("");
  const [idLivre, setIdLivre] = useState("");

  const handleBarCodeScanned = async ({ data }) => {
    setScannedData(data);
    setModalVisible(false);

    if (!firstName && !lastName) {
      console.log('prenom')
      const dataUser = await getService(scannedData);
      console.log("info ajax prenom", dataUser);
      setFirstName(dataUser.prenom);
      setLastName(dataUser.nom);
      setScannedData(null);
    } else if (!idSpot) {
      console.log('spot')

      const dataspot = await getService(scannedData);
      console.log("info ajax spot", dataspot);
      setIdSpot(dataspot.id);
      setScannedData(null);
    } else {
      const dataLivre = await getService(scannedData);
      console.log("info ajax spot", dataLivre);
      setIdLivre(dataLivre.id);
      setScannedData(null);
    }

  };

  // const takeUser = async ({ data }) => {
  //   handleBarCodeScanned();

  //   try {
  //     const dataUser = await getService(scannedData);
  //     console.log("info ajax",dataUser);
  //     setFirstName(dataUser.prenom);
  //     setLastName(dataUser.nom);
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des données de l'API :");
  //   }
  // };



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Scanner votre Carte d'identification</Text>


          {firstName && lastName ?
            <>
              <View style={styles.resultContainer}>
                {firstName && <Text style={styles.resultData}>Prénom: {firstName}</Text>}
                {lastName && <Text style={styles.resultData}>Nom: {lastName}</Text>}
              </View>
            </>
            : null}
          {idSpot ?
            <>
              <View style={styles.resultContainer}>
                {idSpot && <Text style={styles.resultData}>Boite n°: {idSpot}</Text>}
              </View>
            </>
            : null}
          {idLivre ?
            <>
              <View style={styles.resultContainer}>
                {idLivre && <Text style={styles.resultData}>Prénom: {idLivre}</Text>}
              </View>
            </>
            : null}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.scanButton}>Scanner le QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    textAlign: "center",
  },
  scanButton: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "#0080FF",
    color: "#FFF",
    textAlign: "center",
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultData: {
    fontSize: 16,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  closeButton: {
    backgroundColor: "#FF0000",
    padding: 15,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});
