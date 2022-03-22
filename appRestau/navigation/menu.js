import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreatePerson from '../screens/CreatePerson/CreatePerson';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from '../screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from '../screens/NewPassword/NewPassword';
import MainCategories from '../screens/mainCategorias';
import ProductsDetails from '../screens/Restaurant';
import Cart from '../screens/Cart/MyCart';
import CashDetails from '../screens/Facturacion/DetalleEfectivo';
import PaymentMethod from '../screens/Facturacion/metodoPago';

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
                <Stack.Screen name="MainCategories" component={MainCategories} />
                <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="CashDetails" component={CashDetails} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethod} />

            </Stack.Navigator>

        </NavigationContainer>

    );

}