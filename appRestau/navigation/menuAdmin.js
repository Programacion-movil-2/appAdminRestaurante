import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Producto from "../screens/producto";
import Persona from "../screens/persona"
import CreatePerson from "../screens/CreatePerson/CreatePerson";

const Stack = createNativeStackNavigator();

export default function LNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            > 
                <Stack.Screen name="Producto" component={Producto} />
                <Stack.Screen name="Persona" component={Persona} />
                <Stack.Screen name="CreatePerson" component={CreatePerson} />
                
               

            </Stack.Navigator>

        </NavigationContainer>
    );
}