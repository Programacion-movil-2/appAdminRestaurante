import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreatePerson from '../screens/CreatePerson/CreatePerson';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from '../screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from '../screens/NewPassword/NewPassword';
import Producto from '../screens/producto';
import ProductsDetails from '../screens/Restaurant';
import Cart from '../screens/Cart/MyCart';
import CashDetails from '../screens/Facturacion/DetalleEfectivo';
import CardDetails from '../screens/Facturacion/DetalleTarjeta';
import Billing from '../screens/Facturacion/Factura';
import PaymentMethod from '../screens/Facturacion/MetodoPago';
import UserProfile from '../screens/UserProfile/UserProfile';
import Persona from "../screens/persona"
import Inventory from "../screens/Inventory/Inventory";
import Products from "../screens/Inventory/Products";
import InsertProduct from "../screens/Inventory/InsertProduct";

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
                <Stack.Screen name="Producto" component={Producto} />
                <Stack.Screen name="Persona" component={Persona} />
                <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="CashDetails" component={CashDetails} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
                <Stack.Screen name="CardDetails" component={CardDetails} />
                <Stack.Screen name="Billing" component={Billing} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
               
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="Inventory" component={Inventory}/>
                <Stack.Screen name="InsertProduct" component={InsertProduct}/>

            </Stack.Navigator>

        </NavigationContainer>

    );

}