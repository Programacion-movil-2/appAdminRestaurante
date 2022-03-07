import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomImput = ({value,  placeholder, secureTextEntry}) =>{

    return(

        <View style={styles.container}>

            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />   

        </View>

    );
    
}

const styles = StyleSheet.create({

    container:{

        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,

    },

    input:{

        height: 52,
        fontSize: 16,

    },

})

export default CustomImput