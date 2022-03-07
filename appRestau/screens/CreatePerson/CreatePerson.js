import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomImput from '../../elements/login/customImput';
import CustomButton from '../../elements/login/customButton';
import CustomButton2 from '../../elements/login/customButton2';

const CreatePerson = () => {
    const {name, setName} = useState('');
    const {apellido, setApellido} = useState('');
    const {telefono, setTelefono} = useState('');
    const {direccion, setDireccion} = useState('');

    const onRegisterPressed = async () =>{

        if(!name || !apellido || !telefono || !direccion){
            console.log("Debe llenar todos los campos oblicatorios");
            Alert.alert("Restaurante", "Ingrese todos los campos");
        }
        else{
            try {
                const res = await fetch('http://', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: name,
                        apellido: apellido,
                    })

                })
            } catch (error) {
                
            }
        }

        console.warn('Register');

    }

    const onCreateAPressed = () =>{

        console.warn('Create Account')

    }

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Register</Text>


                <CustomImput 
                    placeholder="Nombre" 
                    value={name} 
                    setValue={setName} 
                />
                <CustomImput 
                    placeholder="Apellido" 
                    value={apellido} 
                    setValue={setApellido} 
                />
                <CustomImput 
                    placeholder="Teléfono" 
                    value={telefono} 
                    setValue={setTelefono} 
                />
                <CustomImput 
                    placeholder="Dirección" 
                    value={direccion} 
                    setValue={setDireccion} 
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

    }   

})

export default CreatePerson