import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const SinInScreen = () => {
    const {userName, setUserName} = useState('');
    const {password, setPassword} = useState('');
    const { height } = useWindowDimensions();

    const onSingInPressed = () =>{

        console.warn('Sing in');

    }

    const onForgotPwdPressed = () =>{

        console.warn('Forgot password?')

    }

    const onSingInFaceboock = () =>{

        console.warn('Login with Facebook')

    }

    const onSingInGoogle = () =>{

        console.warn('Login with Google')

    }

    return(

        <View style={styles.root}>
        
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain" 
        />        

        <CustomImput 
            placeholder="Usuario" 
            value={userName} 
            setValue={setUserName} 
        />
        <CustomImput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true} 
        />

        <CustomButton
             text="Sing in" 
             onPress={onSingInPressed}
        />
        <CustomButton2 
            text="Forgot your password?" 
            onPress={onForgotPwdPressed} 
        />

        <CustomButton
             text="Sing in with Faceboock" 
             onPress={onSingInFaceboock}
        />
        <CustomButton
             text="Sing in with Google" 
             onPress={onSingInGoogle}
        />

        </View>
        
    );
    
}

const styles = StyleSheet.create({

    root:{

        alignItems:'center',
        padding: 15,        

    },

    logo:{
        width: '90%',
        maxWidth: 300,
        maxHeight: 200,
    }

})

export default SinInScreen