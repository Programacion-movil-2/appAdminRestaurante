import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const SignUpScreen = () => {
    const {userName, setUserName} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {passwordConfirm, setPasswordConfirm} = useState('');

    const onRegisterPressed = () =>{

        console.warn('Register');

    }

    const onForgotPwdPressed = () =>{

        console.warn('Forgot password?')

    }

    const onSignInFaceboock = () =>{

        console.warn('Login with Facebook')

    }

    const onSignInGoogle = () =>{

        console.warn('Login with Google')

    }

    const onSignUpPressed = () =>{

        console.warn('Create an account')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Create an Account</Text>


                <CustomImput 
                    placeholder="Usuario" 
                    value={userName} 
                    setValue={setUserName} 
                />
                <CustomImput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail} 
                />
                <CustomImput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true} 
                />
                <CustomImput 
                    placeholder="Confirm Password" 
                    value={passwordConfirm} 
                    setValue={setPasswordConfirm}
                    secureTextEntry={true} 
                />

                <CustomButton
                    text="Register" 
                    onPress={onRegisterPressed}
                />
                <CustomButton2 
                    text="Forgot your password?" 
                    onPress={onForgotPwdPressed} 
                />

                <Text style={styles.text}>
                    -- Or Sign with --
                </Text>

                <CustomButton
                    text="Faceboock" 
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

    title:{

        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10

    }

})

export default SignUpScreen