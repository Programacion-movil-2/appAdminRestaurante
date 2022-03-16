import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreatePerson from '../screens/CreatePerson/CreatePerson';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from '../screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from '../screens/NewPassword/NewPassword';

const Stack = createNativeStackNavigator();

export default function LNavigation(){

    return(

        <NavigationContainer>

            <Stack.Navigator
            
                screenOptions={{
                    headerShown: false,
                }}
            
            >

                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="CreatePerson" component={CreatePerson} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPwdScreen} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />

            </Stack.Navigator>

        </NavigationContainer>

    );

}