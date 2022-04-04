import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Alert,
    StatusBar, ScrollView
} from 'react-native';

import { icons, images, SIZE, COLORS } from '../../constants';
import { FAB } from 'react-native-elements';



const Users = ({ navigation }) => {
    useEffect(() => {
        obtenerUsers();
    }, [])
    async function obtenerUsers() {
        try {
            const respt = await fetch('http://192.168.238.181:5000/api/usuarios/listar');

            const json = await respt.json();
            if (!json) {
                Alert.alert("Portales Restaurant", json.msj);
            } else {
                setUsers(json);
                console.log(json);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // async function identidad(id) {
    //     try {
    //         const respt = await fetch('http://192.168.100.8:5000/api/personas/identidad?idPersona=' + id);
            
    //         const json = await respt.json();
    //         if (!json) {
    //             Alert.alert("Portales Restaurant", json.msj);
    //         } else {

    //             var ID=json
    //             return ID

    //             console.log(json);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const navbar =[

        {
            id: 1,
            name:"Productos",
            icon: icons.burger
        },
        {
            id: 2,
            name:"Personas",
            icon: icons.user
        },
        {
            id: 3,
            name:"Usuarios",
            icon: icons.user
        },
        
        {
            id: 4,
            name:"Pedidos",
            icon: icons.list
        },
        
    ]
    
    function onSelectCategory(category) {
        switch (category.id) {
            case 1:
                navigation.navigate('Producto');
                break;
            case 2:
                navigation.navigate('Persona');
                break;
            case 3:
                navigation.navigate('Users');
                break;
            default:
                break;
            }
        setSelectedCategory(category)

    }

    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [users, setUsers] = React.useState([])
    
    
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('Inventory')}
                >
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZE.radius
                        }}
                    >
                        <Text style={{ ...Styles.h3 }}>Restaurante</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Image
                        source={icons.basket}
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

    function renderMainGategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZE.padding,
                        paddingBottom: SIZE.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZE.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZE.padding,
                        ...Styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                    
                >
                    
                    
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ?
                                COLORS.white : COLORS.lightGray

                        }}
                    >
                         <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>


                    <Text
                        style={{
                            marginTop: SIZE.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...Styles.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
               <View style={{ padding: SIZE.padding * 2 }}>
                <Text style={[Styles.text ,{...Styles.h1}]}>Usuarios </Text>
                <Text></Text>

                <FlatList
                    data={navbar}
                    horizontal
                    showsHorizontalscrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZE.padding * 2 }}
                />
            </View>
        )
    }
 
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZE.padding * 2 }}
                onPress={() => navigation.navigate("CrudUsers", {
                    nombreUsuario: item.nombreUsuario
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZE.padding
                    }}
                >
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZE.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZE.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZE.radius,
                            borderBottomLeftRadius: SIZE.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...Styles.shadow
                        }}
                    >
                        <Text style={{ ...Styles.body2 }}>Código: {item.idPersona} </Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...Styles.h2}}>{item.nombreUsuario} </Text>

                <View
                    style={{
                        marginTop: SIZE.padding,
                        flexDirection: 'row'
                    }}
                >

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 8
                        }}
                    >
                        <View
                            style={{ flexDirection: 'row' }}
                        >  
                        </View>
                        <Text
                            style={{ ...Styles.h4 }}
                        >Correo: {item.correo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: SIZE.padding * 2 }}>
                <FlatList
                    data={users}
                    keyExtractor={item => `${item.idUsuario}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingHorizontal: SIZE.padding * 2,
                        paddingBottom: 30
                    }}
                />
            </View>
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor="#000000" />
            {renderMainGategories()}
            {renderRestaurantList()}

            <FAB style={Styles.fab}
            title="+"
                    color='#3871F3'
                    onPress={() => navigation.navigate('SignUpScreen')}
            />

        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    fab:{
        paddingLeft: 300,
        paddingBottom: 20,
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
    text:{
        textAlign:"center"
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
export default Users;