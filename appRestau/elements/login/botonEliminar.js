import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

const BotonEliminar = ({ onPress, text, bgColor, fgColor }) => {

    return (

        <Pressable
            onPress={onPress}
            style={[styles.container,
            bgColor ? { backgroundColor: bgColor } : {}]}>
            <Text
                style={[styles.text,
                fgColor ? { color: fgColor } : {}]}>{text}
            </Text>
        </Pressable>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#f03030',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    text: {
        fontWeight: 'bold',
        color: 'white'
    },

})

export default BotonEliminar