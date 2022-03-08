import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const SignUpScreen = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    

    const onRegisterPressed = async () =>{

        if(!nombreUsuario || !correo || !contrasena || !passwordConfirm){
            console.log("Debe llenar todos los campos obligatorios");
            Alert.alert("Portales Restaurant", "Ingrese todos los campos");
        }
        else if (contrasena != passwordConfirm) {
            
            console.log("Las contraseñas no coinciden");
            Alert.alert("Portales Restaurant", "Las contraseñas no coinciden");
            
        }
        else{
            try {
                const res = await fetch('http://192.168.0.111:5000/api/usuarios/guardar', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombreUsuario: nombreUsuario,
                        correo: correo,
                        contrasena: contrasena,
                    })

                })
                
                const mensaje = await res.json();
                console.log(mensaje);
                if(!res){
                    Alert.alert("Portales Restaurant", "Usuario Creado");
                }else{
                    Alert.alert("Portales Restaurant", JSON.stringify(mensaje));
                }                

            } catch (error) {
                console.log(error);
                Alert.alert("Portales Restaurant", "Error");
            }
        }
    }

    const onSignInFaceboock = () =>{

        console.warn('Login with Facebook')

    }

    const onSignInGoogle = () =>{

        console.warn('Login with Google')

    }

    const onSignInPressed = () =>{

        console.warn('Sign In')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Create an Account</Text>


                <TextInput 
                    style={styles.input}
                    placeholder="Usuario" 
                    value={nombreUsuario} 
                    onChangeText={setNombreUsuario} 
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Email" 
                    value={correo} 
                    onChangeText={setCorreo} 
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password" 
                    value={contrasena} 
                    onChangeText={setContrasena}
                    secureTextEntry={true} 
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm Password" 
                    value={passwordConfirm} 
                    onChangeText={setPasswordConfirm}
                    secureTextEntry={true} 
                />

                <CustomButton
                    text="Register" 
                    onPress={onRegisterPressed} 
                />

                <Text style={styles.text1}>
                    By registering, you confirm that you accept our {' '} 
                    <Text style={styles.link}>Terms of Use</Text> and{' '}
                    <Text style={styles.link}>Privacy Policy.</Text>
                </Text>

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
                    text="Have an account? Sign In" 
                    onPress={onSignInPressed} 
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
        paddingVertical: 20

    },

    text1:{

        fontSize: 12,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
        paddingBottom: 23

    },

    link:{

        color: '#FDB075'

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

export default SignUpScreen