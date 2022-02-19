import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";

const Main = () => {
    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (err) {
            console.log('Error @clearOnboarding: ', err);
        }
    };

    return (

        <View style={styles.container}>
            <Text>Main Page</Text>
            <TouchableOpacity onPress={clearOnboarding}>
                <Text color="red">Clear Onboarding</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default Main;
