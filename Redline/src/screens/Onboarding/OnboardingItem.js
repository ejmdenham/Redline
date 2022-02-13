
import React from 'react';
import {
  Image,
  useWindowDimensions,
  Text,
  View,
} from 'react-native';

import { ImageResizeMode } from 'react-native';

import styles from './styles';

export default OnboardingItem = ({item}) => { 

    const width = useWindowDimensions.width;

    return (
        <View style={[styles.container, width]}>
            <Image source={item.image} style={styles.image} resizeMode= "contain" />

            <View style={{ flex: .3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};