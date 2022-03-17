import React from "react";
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton3 = ({ onPress, text, bgColor, fgColor }) =>{

    return(

        <Pressable 
            onPress={onPress} 
            style={[styles.container, 
            bgColor ? {backgroundColor: bgColor} : {}]}>
            <Text 
             style={[styles.text, 
             fgColor ? {color: fgColor} : {}]}>{text}
             </Text>            
        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        borderColor: '#3871F3',
        borderWidth: 2,
        width: '100%',
        padding: 15, 
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },

    text: {
        fontWeight: 'bold',
        color: '#3871F3'
    },

})

export default CustomButton3