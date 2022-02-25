import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {

    return (

         <View style={styles.container}>
            <TextInput
            style = {styles.input}
            value = {value}
            onChangeText = {setValue}
            placeholder= {placeholder}
            secureTextEntry = {secureTextEntry}
            />            
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9FBFC',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    input: {},
})

export default CustomInput;