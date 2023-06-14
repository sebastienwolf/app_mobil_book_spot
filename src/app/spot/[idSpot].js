import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getService } from "../../core/services/get.service";
import Button from "../../components/Button";
import Cards from "../../components/Cards"
import { Stack } from 'expo-router';

export default function Page() {
    const { idSpot } = useLocalSearchParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getService("api/livres/spots/" + idSpot);
            setBooks(data);
        };

        fetchData();
    }, []);

    return (
        <ScrollView>
            <Stack.Screen options={{
                title: "Les Livres de la boite"
            }} />
            <View style={styles.container}>
                <View style={styles.main}>

                    {books.map((book) => (
                        <Cards
                            id={book.id}
                            image={book.image}
                            name={book.name}
                            auteur={book.auteur}
                            resume={book.resume}
                        />

                    ))}


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
