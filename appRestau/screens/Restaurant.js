import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'
const burger_restaurant_2 = require("../assets/images/burger-restaurant-2.jpg");
import { icons, COLORS, SIZE } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Restaurant = ({ route, navigation }) => {
    const {idProducto,nombre,descripcion,precio,foto}=route.params;
    const scrollX = new Animated.Value(1);
    const [orderItems, setOrderItems] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [carItems, setCartItems] = useState({
        amount: 0,
        total: 0
    });

    useEffect(()=>{
        setQuantity(0);
        existItems();
    },[]);

    const existItems = async () => {
        let cartItemsExist = await AsyncStorage.getItem("cart");

        if (cartItemsExist) {
            let amount = (JSON.parse(cartItemsExist)).length;
            let total = (JSON.parse(cartItemsExist)).map((i) => i.total).reduce((a, b) => a + b);
            setCartItems({amount: amount, total: total});
        }
    }

    // Menu Encabezado
    function renderHeader() {
        return (
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
                        <Text style ={styles.h5} >Nombre Restaurante</Text>
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


    // Detalle de la comida
    function renderFoodInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >
                {

                    <View
                        key="ID Prod"
                        style={{ alignItems: 'center' }}
                    >
                        <View style={{ height: SIZE.height * 0.35 }}>
                            {/* Food Image */}
                            <Image
                                source={{uri:foto}}
                                resizeMode='contain'
                                style={{
                                    width: SIZE.width,
                                    height: "100%"
                                }}
                            />

                            {/* Quantity */}
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: - 20,
                                    width: SIZE.width,
                                    height: 50,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                    }}
                                    onPress={() => {setQuantity(quantity - 1);}}
                                >
                                    <Text style={{ ...styles.body1 }}>-</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ ...styles.h2 }}>{quantity}</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25
                                    }}
                                    onPress={() => {setQuantity(quantity + 1);}}
                                >
                                    <Text style={{ ...styles.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Name & Description */}
                        <View
                            style={{
                                width: SIZE.width,
                                alignItems: 'center',
                                marginTop: 15,
                                paddingHorizontal: SIZE.padding * 2
                            }}
                        >
                            <Text style={{ marginVertical: 10, textAlign: 'center', ...styles.h2 }}>{nombre} Lps. { precio}</Text>
                            <Text style={{ ...styles.body3 }}>{descripcion}</Text>
                        </View>

                    </View>

                }
            </Animated.ScrollView>
        )
    }



    function renderOrder() {
        return (
            <View>
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZE.padding * 2,
                            paddingHorizontal: SIZE.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        
                        <Text style={{ ...styles.h3 }}>Productos en el carrito: {carItems.amount}</Text>
                        <Text style={{ ...styles.h3 }}>L. {carItems.total}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZE.padding * 2,
                            paddingHorizontal: SIZE.padding * 3
                        }}
                    >

                    </View>

                    {/* Order Button */}
                    <View
                        style={{
                            padding: SIZE.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZE.width * 0.9,
                                padding: SIZE.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZE.radius
                            }}
                            onPress={ async() => {
                                if(quantity === 0){
                                    await AsyncStorage.removeItem("cart")
                                    console.log("Reiniciando el AsyncStorage");
                                }

                                if(quantity > 0){
                                    const item = {
                                        idProducto,
                                        nombre,
                                        precio,
                                        quantity,
                                        total: (precio * quantity)
                                    };

                                     /**Si existe el objeto en el carrito */
                                    const cartItems = await AsyncStorage.getItem("cart");
                                    if (cartItems) {
                                        let items = (JSON.parse(cartItems));//objeto
                                        let updateItems = [...items, item];
                                        await AsyncStorage.setItem("cart", JSON.stringify(updateItems));
                                        let cartUpdate = await AsyncStorage.getItem("cart");
                                        
                                        //let totalA = (JSON.parse(cartUpdate)).map((i) => i.total).reduce((a, b) => a + b);
                                        let total = (JSON.parse(cartUpdate)).reduce(function (total, currentValue) {
                                            return total + currentValue.total;
                                           }, 0);
                      
                                        console.log(total);
                                        setCartItems({
                                            amount: (JSON.parse(cartUpdate)).length,
                                            total: total
                                            
                                        });
                                    }
                                    if (!cartItems) {await AsyncStorage.setItem("cart",JSON.stringify([item]))//Guardamos el objeto
                                        /** */
                                        let cartUpdate = await AsyncStorage.getItem("cart");

                                        setCartItems({
                                            amount: (JSON.parse(cartUpdate)).length,
                                            total: item.total
                                        });
                                    };
                                }

                            }}
                        >
                            <Text style={{ color: COLORS.white, ...styles.h2 }}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
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



export default Restaurant;