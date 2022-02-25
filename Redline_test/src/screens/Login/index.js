import React, {useState} from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

import Logo from "../../../assets/images/TempLogo.png";

import styles from "./styles";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialButtons from "../../components/SocialButtons";

const Login = (props) => {

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in")
        navigation.navigate("Main")
    }

    const forgotPasswordPressed = () => {
        console.warn("Forgot password...? How sad...")
    }
    
    const onJoinPressed = () => {
        console.warn("Go to join screen")
        navigation.navigate("Join")
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    return (
        <ScrollView
        showsVerticalScrollIndicator ={false}>
        <View style={styles.container}>

            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"/>

            <CustomInput 
                placeholder='Username' 
                value={username} 
                setValue={setUsername} 
                />

            <CustomInput 
                placeholder='Password' 
                value={password} 
                setValue={setPassword} 
                secureTextEntry 
                />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password?" onPress={forgotPasswordPressed} type="TERTIARY"/>

            <SocialButtons/>
            
            <CustomButton text="Dont have an account? Create one!" onPress={onJoinPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
        
    );
};

export default Login;