import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getService } from "../../core/services/get.service";
import TextComponent from "../../components/Text";
import TitleText from "../../components/TitleText";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Button from "../../components/Button";
import { Button as ButtonPaper } from "react-native-paper";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idSpot, setIdSpot] = useState("");
  const [auteur, setAuteur] = useState("");
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("1. Veuillez scanner le QR code de la boite à livre.")

  const handleBarCodeScanned = async ({ data }) => {
    if (data) {
      setModalVisible(false);

      if (!idSpot) {
        try {
          const dataspot = await getService(data);
          setIdSpot(dataspot.id);
          setNotice("2. Veuillez scanner le QR code du livre.")
        } catch (error) {
          console.error("Le qr code de la boite n'est pas valide");
        }
      } else {
        try {
          const dataLivre = await getService(data);
          setAuteur(dataLivre.auteur);
          setTitle(dataLivre.name);
          setNotice("Veuillez choisir si vous souhaitez déposer un livre ou l'emprunter.")
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

          {title && auteur && idSpot ?
            <>
              <View style={styles.groupButton}>
                <View style={styles.buttonContainer}>
                  <Button
                    route="/change/depot"
                    title="Déposer"
                    icon="book-plus-outline"
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button style={{ backgroundColor: "#B01F79" }}
                    route="/change/remove"
                    title="retirer"
                    icon="book-open-page-variant"

                  />
                </View>
              </View>
            </> :
            <>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ButtonPaper icon="qrcode-scan" mode="contained">
                  Lancer le scan
                </ButtonPaper>
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
  groupButton: {
    flex: 1,
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
    width: "50%",
    paddingHorizontal: 5,
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
