import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import AuthRouter from "./AuthRouter";

const Stack = createStackNavigator();
const OnboardingRouter = (props) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0 },
                cardStyle: { backgroundColor: '#fff' }
                }}>
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{
                    headerShown: false,
                }}/>
                <Stack.Screen
                name="AuthRouter"
                component={AuthRouter}
                options={{
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    );
};

export default OnboardingRouter;