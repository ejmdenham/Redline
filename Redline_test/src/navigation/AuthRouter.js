import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Login from "../screens/Login";
import Main from "../screens/Main";
import Join from "../screens/Join";

const Stack = createStackNavigator();
const AuthRouter = (props) => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#fff' }
        }}>
            <Stack.Screen
            name="Login"
            component={Login}
            //options={{headerShown: false,}} //This removes the header
            />
            <Stack.Screen
            name="Main"
            component={Main}
            //options={{headerShown: false,}} //This removes the header
            />
            <Stack.Screen
            name="Join"
            component={Join}
            //options={{headerShown: false,}} //This removes the header
            />
        </Stack.Navigator>
    );
};

export default AuthRouter;