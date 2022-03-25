import React, {useState} from 'react';
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const SignInScreen = ({navigation}) => {
    const [nombreUsuario, setNombreUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const { height } = useWindowDimensions();

    const onSignInPressed = async () =>{

        if(!nombreUsuario || !contrasena){
            console.log("Debe llenar todos los campos obligatorios");
            Alert.alert("Portales Restaurant", "Ingrese todos los campos");
        }
        else{
            try {
                const respt = await fetch('http://192.168.0.111:5000/api/autenticacion/iniciosesion', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombreUsuario: nombreUsuario,
                        contrasena: contrasena
                    })

                });

                const json = await respt.json();
                const data = json.data
                console.log(json);
                if(!data.token){
                    console.log(data);
                }else{
                    const token = json.data.token;
                    await AsyncStorage.setItem('token', token);
                    const usuario = json.data.usuario;
                    await AsyncStorage.setItem('UserName', usuario);
                    navigation.navigate('MainCategories');
                    console.log(usuario);
                }
                
                Alert.alert("Portales Restaurant", json.msj);                

            } catch (error) {
                console.log(error);
                Alert.alert("Portales Restaurant", "Error");
            }
        }

    }

    const onForgotPwdPressed = () =>{

        navigation.navigate('ForgotPassword')

    }

    const onSignInFaceboock = () =>{

        console.warn('Login with Facebook')

    }

    const onSignInGoogle = () =>{

        console.warn('Login with Google')

    }

    const onSignUpPressed = () =>{
        navigation.navigate('CreatePerson')
    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
            
            <Image source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain" 
            />        

            <TextInput 
                style={styles.input}
                placeholder="User" 
                value={nombreUsuario}
                onChangeText={setNombreUsuario}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password" 
                secureTextEntry={true} 
                value={contrasena}
                onChangeText={setContrasena}
            />

            <CustomButton
                text="Sign in" 
                onPress={onSignInPressed}
            />
            <CustomButton2 
                text="Forgot your password?" 
                onPress={onForgotPwdPressed} 
            />

            <Text style={styles.text}>
                -- Or Sign with --
            </Text>

            <CustomButton
                text="Facebook" 
                onPress={onSignInFaceboock}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton
                text="Google" 
                onPress={onSignInGoogle}
                bgColor="rgb(250, 233, 234)"
                fgColor="rgb(221, 77, 68)"
            />

            <CustomButton2 
                text="Don't have an account? Create One" 
                onPress={onSignUpPressed} 
            />

            </View>
        </ScrollView>
        
    );
    
}

const styles = StyleSheet.create({

    root:{

        alignItems:'center',
        padding: 15,        

    },

    logo:{
        width: '90%',
        maxWidth: 400,
        maxHeight: 300,
    },

    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        margin: 8
    },

    input:{

        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,

        height: 52,
        fontSize: 16,
    }

})

export default SignInScreen
