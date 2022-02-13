import React, {useState, useRef} from "react";
import { View, FlatList,Animated, SafeAreaView  } from 'react-native';
import styles from "./styles";

import OnboardingSlides from "./OnboardingSlides";
import OnboardingItem from "./OnboardingItem";

export default OnboardingScreen = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return(
        <View style = {styles.container}>
            <View style = {{flex: 3}}>
                <FlatList data={OnboardingSlides} 
                renderItem={({item}) => <OnboardingItem style={styles.container} item={item}/>} 
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled 
                bounces = {false}
                keyExtractor={(item) => item.id}
                onScroll = {Animated.event([{nativeEvent:{contentOffset:{ x: scrollX}}}],{
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                />
            </View>
        </View>
    );
};

