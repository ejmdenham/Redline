import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Onboarding from './src/screens/Onboarding';

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
        <View style={styles.container}>
            {loading ? <Loading /> : viewedOnboarding ? <Main /> : <Onboarding />}
        </View>
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