import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';
import CustomButton3 from '../../elements/login/customButton3';

const ConfirmEmail = () => {
    const {code, setCode} = useState('');
    const { height } = useWindowDimensions();

    const onConfirmPressed = () =>{

        console.warn('Register');

    }

    const onResendPressed = () => {

        console.warn('Resend code')

    }

    const onSignInPressed = () =>{

        console.warn('Sign In')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Confirm your Email</Text>

                <Image source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                /> 

                <CustomImput 
                    placeholder="Code" 
                    value={code} 
                    setValue={setCode} 
                />

                <CustomButton
                    text="Confirm" 
                    onPress={onConfirmPressed}
                />

                <CustomButton3 
                    text="Resend code" 
                    onPress={onResendPressed} 
                />      
                <CustomButton2 
                    text="Back to Sign In" 
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

})

export default ConfirmEmail