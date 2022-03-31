import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView, StatusBar } from "react-native";
import React, { useState } from 'react';
import { Text, Card, Button, useTheme } from 'react-native-elements';
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';

const Inventory = ({ navigation }) => {

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
                        <Text style={styles.h5} >Carrito de Compras</Text>
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
                        //source={icons.basket}
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

    const { theme } = useTheme();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor="#808080" />
            {renderHeader()}

            <View style={styles.Card}>
            <Card>
                <Card.Title>Productos</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                            'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg?size=626&ext=jpg&uid=R35390134&ga=GA1.2.685351009.1648000455.jpg',
                    }}
                />
                <Button
                    onPress={() => navigation.navigate('Products')}
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="VER"
                />
            </Card>
            </View>
            

            <View style={styles.Card2}>
            <Card>
                <Card.Title>Tipos productos</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                            'https://img.freepik.com/free-vector/breakfast-icon-flat_1284-3819.jpg?t=st=1648528714~exp=1648529314~hmac=5c8a18302c249ea872e66176fffefdd5677f52e280e927a0a9492c7f58e89e28&w=740.jpg',
                    }}
                />
                <Button
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="VER"
                />
            </Card>
            </View>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    Card: {
        paddingVertical: 50,
    },
    Card2: {
        paddingVertical: 10,
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

});

export default Inventory