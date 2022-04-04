import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const CrudUsers = ({navigation}) => {
    
    const onRegisterPressed = () =>{
        navigation.navigate('ForgotPwdScreen');
       
    }

    const onSignInGoogle = () =>{

        console.warn('Login with Google')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Create an Account</Text>

                <CustomButton
                    text="Modificar contraseña" 
                    onPress={onRegisterPressed} 
                />
               
                <CustomButton
                    text="Eliminar" 
                    onPress={onSignInGoogle}
                    bgColor="rgb(250, 233, 234)"
                    fgColor="rgb(221, 77, 68)"
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

export default CrudUsers