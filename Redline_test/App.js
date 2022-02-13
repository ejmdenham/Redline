import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Onboarding from './src/screens/Onboarding';

export default App = () => {
    return (
        <View style={styles.container}>
            <Onboarding />
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