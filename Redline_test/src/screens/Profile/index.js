import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Profile = (props) => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Text style={styles.text}> Join Screen </Text>
            <Button
            title="Join!"
            onPress={() => Alert.alert("Wanna Join? Too Bad!")}
            />
            <Button
            title="Back to Login"
            onPress={() => navigation.navigate("")}
            />
            </View>
        
    );
};

export default Profile;