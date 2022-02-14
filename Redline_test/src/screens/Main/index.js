import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";

export default Main = async () => {
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
                <Text>Clear Onboarding</Text>
            </TouchableOpacity>
        </View>
        
    );
};
