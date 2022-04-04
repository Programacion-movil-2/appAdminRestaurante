import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const CreatePerson = ({navigation}) => {
    const [identidad, setIdentidad] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [direccion, setDireccion] = useState(null);


    const onRegisterPressed = async () =>{

        if(!identidad || !nombre || !apellido || !telefono){
            console.log("Debe llenar todos los campos oblicatorios");
            Alert.alert("Restaurante", "Ingrese todos los campos");
        }
        else{
            try {
                const res = await fetch('http://172.20.10.4:5000/api/personas/guardar', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        identidad: identidad,
                        nombre: nombre,
                        apellido: apellido,
                        telefono: telefono,
                        direccion: direccion
                    })

                })

                const json = await res.json();
                Alert.alert("Portales Restaurant", json.msj);
                onCreateAPressed();
            } catch (error) {
                console.log(error);
                Alert.alert("Portales Restaurant", "Error");
            }
        }

    }

    const onCreateAPressed = () =>{

        navigation.navigate('SignUp')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Register</Text>

                
                <TextInput
                    style={styles.input} 
                    placeholder="Identidad" 
                    value={identidad} 
                    onChangeText={setIdentidad} 
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Nombre" 
                    value={nombre} 
                    onChangeText={setNombre} 
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Apellido" 
                    value={apellido} 
                    onChangeText={setApellido} 
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Teléfono" 
                    value={telefono} 
                    onChangeText={setTelefono} 
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Dirección" 
                    value={direccion} 
                    onChangeText={setDireccion} 
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

                <CustomButton2 
                    text="Create Account" 
                    onPress={onCreateAPressed} 
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
    
    input: {

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

export default CreatePerson