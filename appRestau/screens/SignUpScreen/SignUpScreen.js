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

                <Text style={styles.text1}>
                    By registering, you confirm that you accept our {' '} 
                    <Text style={styles.link}>Terms of Use</Text> and{' '}
                    <Text style={styles.link}>Privacy Policy.</Text>
                </Text>

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

    }   

})

export default SignUpScreen