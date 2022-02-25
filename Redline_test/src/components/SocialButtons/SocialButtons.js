import React from "react";
import CustomButton from "../CustomButton";

const SocialButtons = () => {

    
    const onSignInFB = () => {
        console.warn("Sign in with Facebook")
    }

    const onSignInGoogle = () => {
        console.warn("Sign in with Google")
    }

    const onSignInApple = () => {
        console.warn("Sign in with Apple")
    }

    return (
        <>
            <CustomButton text="Facebook Sign In" onPress={onSignInFB} bgColor="#E7EAF4" fgColor="#4765A9"/>
            <CustomButton text="Google Sign in" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton text="Apple Sign in" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636"/>
        </>
    );
};

export default SocialButtons;