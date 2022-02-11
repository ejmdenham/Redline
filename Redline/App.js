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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <SafeAreaView>

        <OnboardingScreen/>
       
      </SafeAreaView>
    </>
  );
};

export default App;
