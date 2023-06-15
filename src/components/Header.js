import { View } from 'react-native';
import { Stack } from "expo-router";
import { IconButton } from 'react-native-paper';
import { useLayoutEffect } from "react";
import { useRouter } from "expo-router";

const Header = ({ title }) => {
    const router = useRouter();

    const handleHome = () => {
        console.log("route home", "/");
        router.push("/");
    };

    return (
        <View>
            <Stack.Screen
                options={{
                    title: title,
                    headerRight: () => (
                        <IconButton
                            icon="home"
                            onPress={() => handleHome()}
                        >
                        </IconButton>
                    ),
                }}
            />
        </View>
    );
};

export default Header;

