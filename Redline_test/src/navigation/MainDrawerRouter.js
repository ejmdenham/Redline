import React from "react";
import { createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();
const MainDrawerRouter = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name=""
            component={}/>
            <Stack.Screen
            name=""
            component={}/>
        </Stack.Navigator>
    );
};

export default MainDrawerRouter;