import React, {useState} from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialButtons from "../../components/SocialButtons";

const Join = (props) => {

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmSignUp")
    }

    const onSignInPressed = () => {
        console.warn("Go to Login screen")
        navigation.navigate("Login")
    }

    const termsOfUsePressed = () => {
        console.warn("Go to Terms of Use")
    }

    const privacyPolicyPressed = () => {
        console.warn("Go to Privacy Policy")
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <ScrollView
        showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>

            <Text style={styles.title}>Create an account</Text>

            <CustomInput 
                placeholder='Username' 
                value={username} 
                setValue={setUsername} 
                />

            <CustomInput 
                placeholder='Email' 
                value={email} 
                setValue={setEmail} 
                />

            <CustomInput 
                placeholder='Password' 
                value={password} 
                setValue={setPassword} 
                secureTextEntry 
                />

            <CustomInput 
                placeholder='Repeat Password' 
                value={passwordRepeat} 
                setValue={setPasswordRepeat} 
                secureTextEntry 
                />

            <CustomButton text="Register" onPress={onRegisterPressed}/>
            <Text style={styles.text}>
                By registering, you confirm that you agree to our <Text style={styles.link} onPress={termsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={privacyPolicyPressed}>Privacy Policy</Text>.
            </Text>

            <SocialButtons/>
            
            <CustomButton text="Already have an account? Sign in here!" onPress={onSignInPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
        
    );
};

export default Join;