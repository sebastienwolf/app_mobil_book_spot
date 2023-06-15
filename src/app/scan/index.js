import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getService } from "../../core/services/get.service";
import { Text as TextPaper } from 'react-native-paper';
import ButtonComponent from "../../components/Button";
import { Button as ButtonPaper } from "react-native-paper";
import Header from '../../components/Header';


export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [idSpot, setIdSpot] = useState("");
  const [spotName, setSpotName] = useState("");
  const [spotStreet, setSpotStreet] = useState("");
  const [spotCP, setSpotCP] = useState("");
  const [spotCity, setSpotCity] = useState("");
  const [auteur, setAuteur] = useState("");
  const [title, setTitle] = useState("");
  const [available_at, setAvailable_at] = useState("");
  const [notice, setNotice] = useState("1. Veuillez scanner le QR code de la boite à livre.")

  const handleBarCodeScanned = async ({ data }) => {
    if (data) {
      setModalVisible(false);

      if (!idSpot) {
        try {
          const dataspot = await getService(data);
          setIdSpot(dataspot.id);
          setSpotName(dataspot.name);
          setSpotStreet(dataspot.street);
          setSpotCP(dataspot.cp);
          setSpotCity(dataspot.city);
          setNotice("2. Veuillez scanner le QR code du livre.")
        } catch (error) {
          console.error("Le qr code de la boite n'est pas valide");
        }
      } else {
        try {
          const dataLivre = await getService(data);
          setAuteur(dataLivre.auteur);
          setTitle(dataLivre.name);
          setAvailable_at(dataLivre.available_at)
          setNotice("Veuillez choisir si vous souhaitez déposer un livre ou l'emprunter.")
        } catch (error) {
          console.error("Le qr code du livre n'est pas valide");
        }
      }
    }

  };

  return (
    <ScrollView>
      <Header title="Transaction d'un livre" />

      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Veuillez suivre les instructions </Text>
          {idSpot ?
            <>
              <View style={styles.resultContainer}>
                <TextPaper variant="titleMedium">Information de la boite</TextPaper>
                <TextPaper variant="bodyMedium">{spotName}</TextPaper>
                <TextPaper variant="bodyMedium">{spotStreet}</TextPaper>
                <TextPaper variant="bodyMedium">{spotCP} {spotCity}</TextPaper>
              </View>
            </>
            : null}
          {title && auteur ?
            <>
              <View style={styles.resultContainer}>
                <TextPaper variant="titleMedium">Information du livre</TextPaper>
                <TextPaper variant="bodyMedium">Titre : {title}</TextPaper>
                <TextPaper variant="bodyMedium">Auteur : {auteur}</TextPaper>

              </View>
            </>
            : null}

          <TextPaper style={styles.textNotice} variant="bodyMedium">{notice}</TextPaper>


          { title && auteur && idSpot ?
            (
              <View style={styles.groupButton}>
                { available_at ?
                  (
                    <View style={styles.buttonContainer}>
                      <ButtonComponent style={{ backgroundColor: "#B01F79" }}
                        route="/change/remove"
                        title="retirer"
                        icon="book-open-page-variant"
                      />
                    </View>
                  )
                  :
                  (
                    <View style={styles.buttonContainer}>
                      <ButtonComponent
                        route="/change/depot"
                        title="Déposer"
                        icon="book-plus-outline"
                      />
                    </View>
                  )}
              </View>
              )    
            :
            (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ButtonPaper icon="qrcode-scan" mode="contained">
                  Lancer le scan
                </ButtonPaper>
              </TouchableOpacity>
            )}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    gap: 10,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
    textAlign:'center',
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
