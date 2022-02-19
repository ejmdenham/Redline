import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Main from "../screens/Main";

const Stack = createStackNavigator();
const Router = (props) => {
    return(
        <NavigationContainer>
              <Stack.Navigator>
                    <Stack.Screen
                    name="Login"
                    component={Login}/>
                    <Stack.Screen
                    name="Main"
                    component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;