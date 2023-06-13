import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getService } from "../../core/services/get.service";
import TextComponent from "../../components/Text";
import TitleText from "../../components/TitleText";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Button } from "react-native-paper";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idSpot, setIdSpot] = useState("");
  const [auteur, setAuteur] = useState("");
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("1. Veuillez scanner le QR code de votre carte d'adhérent.")

  const handleBarCodeScanned = async ({ data }) => {
    if (data) {
      setModalVisible(false);

      if (!firstName && !lastName) {
        console.log("prénom")
        try {
          const dataUser = await getService(data);
          console.log(dataUser)
          setFirstName(dataUser.prenom);
          setLastName(dataUser.nom);
          setNotice("2. Veuillez scanner le QR code de la boite à livre.")
        } catch (error) {
          console.error("Ce profil n'est pas valide");
        }

      } else if (!idSpot) {
        try {
          const dataspot = await getService(data);
          setIdSpot(dataspot.id);
          setNotice("3. Veuillez scanner le QR code du livre.")
        } catch (error) {
          console.error("Le qr code de la boite n'est pas valide");
        }
      } else {
        try {
          const dataLivre = await getService(data);
          setAuteur(dataLivre.auteur);
          setTitle(dataLivre.name);
          setNotice("")
        } catch (error) {
          console.error("Le qr code du livre n'est pas valide");
        }
      }
    }

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Veuillez suivre les instructions </Text>


          {firstName && lastName ?
            <>
              <View style={styles.resultContainer}>
                <TitleText value={"Information de l'utilisateur"} />
                <TextComponent value={"Prénom : " + firstName} />
                <TextComponent value={"Nom : " + lastName} />
              </View>
            </>
            : null}
          {idSpot ?
            <>
              <View style={styles.resultContainer}>
                <TitleText value={"Information de la boite"} />
                <TextComponent value={"Boite n° : " + idSpot} />
              </View>
            </>
            : null}
          {title && auteur ?
            <>
              <View style={styles.resultContainer}>
                <TitleText value={"Information du livre"} />
                <TextComponent value={"Titre : " + title} />
                <TextComponent value={"Auteur : " + auteur} />
              </View>
            </>
            : null}

          <TextComponent value={notice} style={styles.textNotice} />

          {title && auteur && idSpot && firstName && lastName ?
            <>
              <View style={styles.modalContainer}>
                <Button
                  route="/scan"
                  title="Déposer votre livre"
                  icon="book"
                />
                <Button
                  route="/scan"
                  title="retirer votre livre"
                  icon="book-reader"
                />
              </View>
            </> :
            <>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Button icon="qrcode-scan" mode="contained">
                  Scanner votre carte
                </Button>
              </TouchableOpacity>
            </>}
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
    gap: 10,
    marginTop: 20,
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
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
  textNotice: {
    color: "#AF361C",
  },


  scanButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080FF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
  },
  iconContainer: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
  scanButtonText: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 10,
  },
});
