import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, ScrollView, Alert, TextInput,TouchableOpacity,StatusBar } from 'react-native';
import CustomButton from '../../elements/login/customButton';
import BotonEliminar from '../../elements/login/botonEliminar';
import icons from '../../constants/icons';
import {SIZE, COLORS} from '../../constants';

const CreatePerson = ({ route, navigation }) => {
  

    const {idPersona,nombre,apellido,telefono,idCargo,direccion,identidad}=route.params;
    
    
    const [IDENTIDAD, setIDENTIDAD] = useState(identidad);
    const [NOMBRE, setNOMBRE] = useState(nombre);
    const [APELLIDO, setAPELLIDO] = useState(apellido);
    const [TELEFONO, setTELEFONO] = useState(telefono);
    const [DIRECCION, setDIRECCION] = useState(direccion);


    const onRegisterPressed = async () => {

        if (!IDENTIDAD || !NOMBRE || !APELLIDO || !TELEFONO) {
            console.log("Debe llenar todos los campos oblicatorios");
            Alert.alert("Restaurante", "Ingrese todos los campos");
        }
        else {
            try {
                const res = await fetch('http://192.168.0.3:5000/api/personas/guardar', {

                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        IDENTIDAD: IDENTIDAD,
                        NOMBRE: NOMBRE,
                        APELLIDO: APELLIDO,
                        TELEFONO: TELEFONO,
                        DIRECCION: DIRECCION
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
    function renderHeader(){
        return(

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZE.padding * 3,
                            borderRadius: SIZE.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style ={styles.h5} >Your Profile</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

            </View>   

        )
    }

    const onCreateAPressed = () => {

        navigation.navigate('SignUp')

    }

    return (
       
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden={false} backgroundColor="#000000" />

            {renderHeader()}
            <View style={styles.root}>

                <Text style={styles.title}>Register</Text>


                <TextInput
                    style={styles.input}
                    placeholder="Identidad"
                    value={IDENTIDAD}
                    onChangeText={setIDENTIDAD}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={NOMBRE}
                    onChangeText={setNOMBRE}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={APELLIDO}
                    onChangeText={setAPELLIDO}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                    value={TELEFONO}
                    onChangeText={setTELEFONO}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Dirección"
                    value={DIRECCION}
                    onChangeText={setDIRECCION}
                />

                <CustomButton
                    text="Modificar"
                    onPress={onRegisterPressed}
                />
                <BotonEliminar
                    style={styles.espacio}
                    text="Eliminar"
                    //onPress={}
                />
            </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create({

    root: {

        alignItems: 'center',
        padding: 15,

    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        margin: 8
    },
    espacio:{
        paddingVertical:50
    },

    title: {

        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        paddingVertical: 20

    },

    text1: {

        fontSize: 12,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
        paddingBottom: 23

    },

    link: {
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

    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },

    largeTitle: { fontSize: SIZE.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZE.h1, lineHeight: 36 },
    h2: { fontSize: SIZE.h2, lineHeight: 30 },
    h3: { fontSize: SIZE.h3, lineHeight: 22 },
    h4: { fontSize: SIZE.h4, lineHeight: 22 },
    body1: { fontSize: SIZE.body1, lineHeight: 36 },
    body2: { fontSize: SIZE.body2, lineHeight: 30 },
    body3: { fontSize: SIZE.body3, lineHeight: 22 },
    body4: { fontSize: SIZE.body4, lineHeight: 22 },
    body5: { fontSize: SIZE.body5, lineHeight: 22 },

})

export default CreatePerson