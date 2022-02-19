import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import OnboardingItem from './onboardingItems';
import slides from './onboardingSlides';
import Paginator from './Paginator';
import nextButton from './nextButton';

import AuthRouter from '../../navigation/AuthRouter';

import styles from './styles';

const Onboarding = (props) => {

    const navigation = useNavigation();

    const toLogin = () => (
        //Navigate to the AuthRouter and replace the current screen with it
        navigation.replace("AuthRouter")
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                console.log('clicked last OB screen');
                toLogin();
            } catch (err) {
                console.log('Error @setItem: ', err);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)}/> 
        </View>
    );
};

export default Onboarding;
