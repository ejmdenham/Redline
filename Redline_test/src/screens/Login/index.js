import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Login = (props) => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Text style={styles.text}> Login Screen </Text>
            <Button
            title="Click Here To Main"
            onPress={() => navigation.navigate("Main")}
            /> 
        <Button
            title="Click Here To Join"
            onPress={() => navigation.navigate("Join")}
            /></View>
        
    );
};

export default Login;