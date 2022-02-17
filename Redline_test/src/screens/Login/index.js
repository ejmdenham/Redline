import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Login = ({navigation}) => {
    return (

        <View style={styles.container}>
            <Text > Login Screen </Text>
            <Button
            title="Click Here"
            onPress={() => alert("BING!")}
            />
        </View>
        
    );
};

export default Login;