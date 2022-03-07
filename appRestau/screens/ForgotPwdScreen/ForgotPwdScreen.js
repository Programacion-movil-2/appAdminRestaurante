import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const ForgotPwdScreen = () => {
    const {email, setEmail} = useState('');
    const { height } = useWindowDimensions();

    const onConfirmPressed = () =>{

        console.warn('Sent Email');

    }

    const onSignInPressed = () =>{

        console.warn('Sign In')

    }

    const onSignUpPressed = () =>{

        console.warn('Sign Up')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Reset your Password</Text>

                <Image source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                /> 

                <CustomImput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail} 
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
    }

})

export default ForgotPwdScreen