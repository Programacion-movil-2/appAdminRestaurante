import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, TextInput, Alert } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPwdScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();

    const onConfirmPressed = async () =>{

        //console.log(email);
        if(!email){
            console.log("Ingrese su correo electronico");
            Alert.alert("Portales Restaurant", "Ingrese su correo electronico");
        }
        else 
            try {
                const respt = await fetch('http://192.168.0.111:5000/api/autenticacion/recuperarCorreo', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: email
                    })

                });

                const json = await respt.json();
                console.log(json);
                Alert.alert("Portales Restaurant", json.msj);
                navigation.navigate('NewPassword',{
                    correo: email
                });

            } catch (error) {
                console.log(error);
                Alert.alert("Portales Restaurant", "Error");
            }

    }

    const onSignInPressed = () =>{

        navigation.navigate('SignIn')

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
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                />

                <CustomButton
                    text="Send Email" 
                    onPress={onConfirmPressed}
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

export default ForgotPwdScreen