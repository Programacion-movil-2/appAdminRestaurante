import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton2 = ({ onPress, text}) =>{

    return(

        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>            
        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 15, 
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },

    text: {
        fontWeight: 'bold',
        color: 'gray'
    },

})
export default CustomButton2