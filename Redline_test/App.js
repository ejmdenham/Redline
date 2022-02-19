import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler"

import OnboardingRouter from './src/navigation/OnboardingRouter';
import AuthRouter from './src/navigation/AuthRouter';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size="large"/>
        </View>
    );
};

export default App = () => {

    const [loading,setloading] = useState(true);
    const [viewedOnboarding,setViewedOnboarding] = useState(false);

    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@viewedOnboarding');

            if (value !== null) {
                setViewedOnboarding(true);
            }
        } catch (err) {
            console.log('Error @checkOnboarding: ', err);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        checkOnboarding();
    }, []);

    return (
        <NavigationContainer>
            {loading ? <Loading /> : viewedOnboarding ? <AuthRouter /> : <OnboardingRouter />}
            {/*<OnboardingRouter/>*/}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});