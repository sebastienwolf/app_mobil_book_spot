import { useAuth } from "../../context/auth";
import React, {useState} from "react"
import { getService } from "../../core/services/get.service";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from "react-native";

export default function SignIn() {
    const { signIn } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);


    const handleBarCodeScanned = async ({ data }) => {
        if (data) {
            setModalVisible(false);

            try {
                const dataUser = await getService(data);
            } catch (error) {
                console.error("Ce profil n'est pas valide");
            }
        };
    }

    return (
        <ScrollView>
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text onPress={() => signIn()}>Sign In</Text> 
            </View> */}

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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  
   
    
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