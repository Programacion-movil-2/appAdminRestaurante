import React, { useState } from "react";
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

const Restaurant = ({ route, navigation }) => {
    const {idProducto,nombre,descripcion,precio,foto}=route.params;


    const scrollX = new Animated.Value(0);
    const [orderItems, setOrderItems] = React.useState([]);


    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
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
                                    onPress={() => editOrder("-", 2, precio)}
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
                                    <Text style={{ ...styles.h2 }}>{getOrderQty(2)}</Text>
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
                                    onPress={() => editOrder("+", 2,precio)}
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
                        <Text style={{ ...styles.h3 }}>{getBasketItemCount()} Productos en carrito</Text>
                        <Text style={{ ...styles.h3 }}>L{sumOrder()}</Text>
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
                            // onPress={() => navigation.navigate("OrderDelivery", {
                            //     restaurant: restaurant,
                            
                            // })}
                            onPress={() => navigation.navigate('MainCategories')}
                        >
                            <Text style={{ color: COLORS.white, ...styles.h2 }}>Ordenar</Text>
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