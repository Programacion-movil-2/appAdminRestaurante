import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Producto from "../screens/CrudProducts/producto";
import CrudProducts from "../screens/CrudProducts/CrudProducts";
import Persona from "../screens/CrudPersona/persona"
import CrudPersona from "../screens/CrudPersona/CrudPersona"
import InsertProduct from "../screens/Inventory/InsertProduct";
import Users from "../screens/crudUsers/users";
import ForgotPwdScreen from "../screens/ForgotPwdScreen/ForgotPwdScreen";
import NewPassword from "../screens/NewPassword/NewPassword";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import CrudUsers from "../screens/crudUsers/CrudUsers"

const Stack = createNativeStackNavigator();

export default function LNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Producto" component={Producto} />
                <Stack.Screen name="CrudProducts" component={CrudProducts} />
                <Stack.Screen name="Persona" component={Persona} />
                <Stack.Screen name="CrudPersona" component={CrudPersona} />
                <Stack.Screen name="InsertProduct" component={InsertProduct} />
                <Stack.Screen name="Users" component={Users} />
                <Stack.Screen name="CrudUsers" component={CrudUsers} />
                <Stack.Screen name="ForgotPwdScreen" component={ForgotPwdScreen} />
                <Stack.Screen name="NewPassword" component={NewPassword} />   
            
            </Stack.Navigator>

        </NavigationContainer>
    );
}