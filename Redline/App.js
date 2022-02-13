/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import OnboardingScreen from './src/screens/Onboarding';

const App = () => {
  return (
    <View style = {styles.container}>
        <OnboardingScreen/>
        <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: '#fff'
  }

});

export default App