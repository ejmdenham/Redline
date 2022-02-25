import React, {useState} from "react";
import {Text, View, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

import styles from "./styles";

const ConfirmSignUp = () => {

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        console.warn("ConfirmPressed")
    }

    const onSignInPressed = () => {
        navigation.navigate("Login")
    }

    const onResendPressed = () => {
        console.warn("Resend Code!")
    }

    const [code, setCode] = useState('');

    return (
        <ScrollView
        showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>

            <Text style={styles.title}>Confirm Sign Up!</Text>

            <CustomInput 
                placeholder='Enter Your Confirmation Code' 
                value={code} 
                setValue={setCode} 
                />

            <CustomButton text="Confirm" onPress={onConfirmPressed}/>
            <CustomButton text="Resend Code" onPress={onResendPressed}/>
            
            <CustomButton 
                text="Back to Sign In!" onPress={onSignInPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
        
    );
};

export default ConfirmSignUp;