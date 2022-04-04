import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, TextInput, Alert } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewPassword = ({route, navigation}) => {
    const {correo} = route.params;
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    

    const onSubmitPressed = async () =>{
        console.log(correo);

        if(!code || !password){
            console.log("Ingrese todos los datos obligatorios");
            Alert.alert("Portales Restaurant", "Ingrese todos los datos obligatorios");
        }
        else{
            
            try {
                const respt = await fetch('http://192.168.238.181:5000/api/usuarios/modificarContrasena', {

                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: correo,
                        pin: code,
                        contrasena: password
                    })

                });

                const json = await respt.json();
                console.log(json);
                console.log(correo);
                Alert.alert("Portales Restaurant", json.msj);
                navigation.navigate('SignInScreen');

            } catch (error) {
                console.log(error);
                Alert.alert("Portales Restaurant", "Error");
            }

        }

    }

    const onSignInPressed = () =>{

        navigation.navigate('SignInScreen')

    }

    const onSignUpPressed = () =>{

        navigation.navigate('SignUp')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Reset your Password</Text>

                <Image source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                /> 

                <TextInput 
                    style={styles.input}
                    placeholder="Code" 
                    value={code} 
                    onChangeText={setCode} 
                />

                <TextInput 
                    style={styles.input}
                    placeholder="New Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Submit" 
                    onPress={onSubmitPressed}
                />
    
                <CustomButton2 
                    text="Back to Sign In" 
                    onPress={onSignInPressed}
                />

                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>

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

    title:{

        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        paddingVertical: 30

    },

    text1:{
        color: '#F9F8FC'
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

export default NewPassword