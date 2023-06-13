import { useAuth } from "../../context/auth";
import React, { useState } from "react"
import { getService } from "../../core/services/get.service";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from "react-native";
import { Text as TextPaper } from 'react-native-paper';
import logo from'../../../assets/pictures/logo2.png';

export default function SignIn() {
    const { signIn } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);


    const handleBarCodeScanned = async ({ data }) => {
        if (data) {
            setModalVisible(false);

            try {
                const dataUser = await getService(data);
                signIn(dataUser)
            } catch (error) {
                console.error("Ce profil n'est pas valide");
            }
        };
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
            <Image source={logo} style={{ height: 200, maxWidth: "100%", resizeMode: "contain" }} />
               
                <TextPaper style={styles.text} variant="labelLarge">
                    Si vous ne disposez pas d'une carte d'identification, nous vous encourageons vivement à vous rendre à la mairie pour obtenir la vôtre.
                </TextPaper>

                <TextPaper style={styles.text} variant="labelLarge">
                    La carte d'identification est un document essentiel qui facilite votre participation active dans notre ville et vous permet de bénéficier de nombreux services.
                </TextPaper>

                <TextPaper style={styles.text} variant="labelLarge">
                    Obtenez votre carte d'identification dès maintenant et profitez pleinement de tout ce que notre ville a à offrir !
                </TextPaper>
                <TextPaper variant="headlineSmall">Pour vous connecter :</TextPaper>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Button icon="qrcode-scan" mode="contained">
                        Scanner votre carte
                    </Button>
                </TouchableOpacity>

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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },

    main: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    text: {
        textAlign: "center",
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