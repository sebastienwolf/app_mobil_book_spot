import { StyleSheet, View, ScrollView } from "react-native";
import { Text as TextPaper } from 'react-native-paper';
import { useAuth } from "../../context/auth";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Stack } from 'expo-router';
import Header from '../../components/Header';

export default function Page() {
    const { user } = useAuth();
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        setFirstName(user.prenom);
    }, []);


    return (
        <ScrollView>
            <Header title="Retrait d'un livre" />
            <View style={styles.container}>
                <View style={styles.main}>

                    <TextPaper style={styles.text} variant="labelLarge">
                        Nous tenons à vous remercier sincèrement {firstName} d'avoir retiré ce livre. Votre intérêt pour notre
                        collection et votre participation à notre service de prêt sont très appréciés. Nous espérons que ce livre
                        vous apportera de nombreuses heures de plaisir et d'enrichissement.
                    </TextPaper>

                    <TextPaper style={styles.text} variant="labelLarge">
                        Nous tenons à vous informer qu'il s'agit d'un test et qu'aucune modification ne sera apportée au livre que vous
                        avez retiré. Cette simulation nous permet d'évaluer le bon fonctionnement de notre service de prêt et de nous
                        assurer que tout se déroule sans problème. Votre participation à ce test est très précieuse et nous vous
                        remercions de votre compréhension.
                    </TextPaper>

                    <TextPaper style={styles.text} variant="labelLarge">
                        Encore une fois, un grand merci pour votre participation et votre soutien continu. Votre contribution est inestimable
                        et nous sommes reconnaissants de vous avoir parmi nous. Si vous avez des questions ou des commentaires, n'hésitez pas
                        à nous contacter. Bonne lecture !
                    </TextPaper>

                    <Button
                        route="/"
                        title="accueil"
                        icon="home"
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

});