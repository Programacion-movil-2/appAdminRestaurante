import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Alert
} from 'react-native';

import { icons, images, SIZE, COLORS } from '../constants'


const MainCategorias = ({navigation}) => {
    useEffect(() => {
        obtenerCategorias();
        obtenerProductos();
        obtenerTipo();
    }, [])


    async function obtenerCategorias() {
        try {
            const respt = await fetch('http://192.168.0.3:5000/api/tipoProductos/listarTipoProducto');

            const json = await respt.json();
            setCategories(json);
            console.log(json);



        } catch (error) {
            console.log(error);

        }
    }
    async function obtenerProductos(idTipoProducto = 4) {
        try {
            const respt = await fetch('http://192.168.0.3:5000/api/productos/listarProductosTipo?idTipoProducto=' + idTipoProducto);

            const json = await respt.json();
            if (!json) {
                Alert.alert("Portales Restaurant", json.msj);
            } else {
                setRestaurants(json);
                console.log(json);
            }
        } catch (error) {
            console.log(error);

        }
    }
    async function obtenerTipo(idTipoProducto = 4) {
        try {
            const tipo = await fetch('http://192.168.0.3:5000/api/tipoProductos/listarTipo?idTipoProducto=' + idTipoProducto);

            const json = await tipo.json();
            if (!json) {
                Alert.alert("Portales Restaurant", json.msj);
            } else {
                setTipo(json);
                console.log(json);
            }
        } catch (error) {
            console.log(error);

        }

    }
    async function obtenerTipoPrincipal(idTipoProducto) {
        try {
            const tipoPrincipal = await fetch('http://192.168.0.3:5000/api/productos/listarProductosDeCategorias?idTipoProducto=' + idTipoProducto);

            const json = await tipoPrincipal.json();
            if (!json) {
                Alert.alert("Portales Restaurant", json.msj);
            } else {
                setRestaurants(json);
                console.log(json);
            }
        } catch (error) {
            console.log(error);

        }

    }
    function prueba(id) {
        if (id == 1) {
            return "comida"
        } else {
            return "Bebida"
        }
    }
    const [categories, setCategories] = React.useState([])
    const [tipo, setTipo] = React.useState([])
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([])

    function onSelectCategory(category) {
        if (category.idTipoProducto == 1 || category.idTipoProducto == 2) {
            obtenerTipoPrincipal(category.idTipoProducto);
            obtenerTipo(category.idTipoProducto);
        } else {
            obtenerProductos(category.idTipoProducto);
            obtenerTipo(category.idTipoProducto);
        }
        setSelectedCategory(category)

    }


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
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
                        backgroundColor: (selectedCategory?.id == item.idTipoProducto) ? COLORS.primary : COLORS.white,
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
                            backgroundColor: (selectedCategory?.id == item.idTipoProducto) ?
                                COLORS.white : COLORS.lightGray

                        }}
                    >
                         <Image
                            source={icons.menu}
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
                            color: (selectedCategory?.id == item.idTipoProducto) ? COLORS.white : COLORS.black,
                            ...Styles.body5
                        }}
                    >
                        {item.nombre}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZE.padding * 2 }}>
                <Text style={{ ...Styles.h1 }}>Menú</Text>
                <Text style={{ ...Styles.h1 }}>Categorias </Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalscrollIndicator={false}
                    keyExtractor={item => `${item.idTipoProducto}`}
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
            onPress={() => navigation.navigate("ProductsDetails", {
                item
            })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZE.padding
                    }}
                >
                    <Image
                        source={{ uri: item.imagen }}
                        resizeMode="cover"
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
                        <Text style={{ ...Styles.h4 }}>15-20 min</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...Styles.body2 }}>{item.nombre}</Text>

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
                            marginLeft: 10
                        }}
                    >


                        <View
                            style={{ flexDirection: 'row' }}

                        >

                            <Text style={{ ...Styles.body3 }}>{tipo.nombre}---</Text>
                            <Text style={{ ...Styles.body3 }}>{prueba(tipo.idTipoPrincipal)}</Text>
                            <Text style={{ ...Styles.h3, color: COLORS.darkgray }}>---</Text>
                        </View>

                        <Text
                            style={{ ...Styles.body3 }}
                        >L{item.precio}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.idProducto}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZE.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }


    return (
        <SafeAreaView style={Styles.container}>
            {renderHeader()}
            {renderMainGategories()}
            {renderRestaurantList()}

        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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

export default MainCategorias;