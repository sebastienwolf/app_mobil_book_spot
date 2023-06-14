import { StyleSheet, View, Image } from 'react-native';
import { Text as TextPaper, Card } from 'react-native-paper';

const CardsCompenent = ({ id, image, name, auteur, resume }) => {
    return (
        <View key={id} style={styles.card}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <TextPaper style={styles.title} variant="titleLarge">{name}</TextPaper>
            <View style={styles.contenair}>
                <View style={styles.block}>
                    <TextPaper style={styles.author} variant="labelLarge"> auteur :</TextPaper>
                    <TextPaper style={styles.author} variant="bodyMedium"> {auteur}</TextPaper>
                </View>
                <View >
                    <TextPaper style={styles.author} variant="labelLarge"> Resumer :</TextPaper>
                    <TextPaper style={styles.summary} variant="bodyMedium">{resume}</TextPaper>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
    image: {
        width: "100%",
        height: 200,
        aspectRatio: 1,
    },

    summary: {
        fontSize: 14,
        textAlign: "justify",
    },

    contenair: {
        gap: 15,

    },
    block: {
        flexDirection: "row",
    },
});

export default CardsCompenent;