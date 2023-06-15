import { View } from 'react-native';
import { Stack } from "expo-router";
import { Button } from 'react-native-paper';
import React, { useState, useEffect } from "react";
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
                        <Button icon="home" mode="outlined" onPress={() => handleHome()}>
                      </Button>
                    ),
                }}
            />
        </View>
    );
};

export default Header;