import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from '../screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from '../screens/NewPassword/NewPassword';

const Stack = createNativeStackNavigator();

const LNavigation = () =>{

    return(

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="SignIn" component={SignInScreen} />

            </Stack.Navigator>

        </NavigationContainer>

    );

}

export default LNavigation;