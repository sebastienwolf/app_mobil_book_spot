import { StyleSheet, View, ScrollView } from "react-native";
import { Text as TextPaper } from 'react-native-paper';
import { useAuth } from "../../context/auth";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

export default function Page() {
    const { user } = useAuth();
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
          setFirstName(user.prenom);
      }, []);


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.main}>

                <TextPaper style={styles.text} variant="labelLarge">
                        Nous tenons à vous remercier sincèrement {firstName} d'avoir déposé ce livre. Votre contribution est très appréciée
                        et contribue à enrichir notre communauté de lecteurs. Grâce à des personnes comme vous, nous pouvons offrir
                        davantage de choix et de possibilités de lecture à tous ceux qui fréquentent notre site. Votre geste
                        généreux est une source d'inspiration pour nous tous.
                    </TextPaper>

                    <TextPaper style={styles.text} variant="labelLarge">
                    Nous aimerions également souligner que cet envoi fait partie d'un test et qu'il n'y aura pas de modifications
                     apportées au livre déposé. Il s'agit simplement d'une simulation pour évaluer le fonctionnement de notre site
                      et nous assurer que tout se déroule sans problème. Nous vous remercions de votre compréhension et de votre
                       participation à ce test.
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