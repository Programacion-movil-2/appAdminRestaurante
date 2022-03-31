import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    StatusBar
} from "react-native";
import React, { useEffect, useState } from 'react';
import {
    Text,
    useTheme,
    Button,
    ButtonGroup,
    withTheme,
    Input,
} from "react-native-elements";
import {
    icons,
    images,
    SIZES,
    SIZE,
    COLORS,
    FONT,
    FONTS,
} from "../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Factura = ({ navigation }) => {
    //let idPedido = 4;
    const [carItems, setCartItems] = useState({
        total: 0
    });

    useEffect(()=>{
        existItems();
    },[]);

    const existItems = async () => {
        let cartItemsExist = await AsyncStorage.getItem("cart");

        if (cartItemsExist) {
            let total = (JSON.parse(cartItemsExist)).map((i) => i.total).reduce((a, b) => a + b);
            setCartItems({total: total});
        }
    }
    var SubTotal = carItems.total;
    var ISV = SubTotal * 0.15;
    var total2 = SubTotal + ISV;

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var fecha = date + '/' + month + '/' + year;

    const insertarFactura = async () => {
        let estado = "facturado";
        if (!SubTotal) {
            console.log("Debe llenar todos los campos oblicatorios");
            Alert.alert("Restaurante", "Error al procesar factura");
        }
        else {
            Alert.alert("Restaurante", "Factura procesada exitosamente.");
            navegarFactura();
            // try {
            //     const res = await fetch('http://192.168.0.3:5000/api/facturas/guardar', {
            //         method: 'POST',
            //         headers: {
            //             Accept: 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             total: total,
            //             fecha: fecha,
            //             idPedido: idPedido
            //         })

            //     })

            //     const json = await res.json();
            //     Alert.alert("Portales Restaurant", json.msj);
            //     navegarFactura();
            // } catch (error) {
            //     console.log(error);
            //     Alert.alert("Portales Restaurant", "Error");
            // }
            //actualizarEstado(estado);
        }

    }

    // const actualizarEstado = async (estado) => {
    //     try {
    //         const res = await fetch('http://192.168.0.3:5000/api/pedidos/modificarEstado?idUsuario=4', {

    //             method: 'PUT',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 estado: estado,
    //             })

    //         })

    //         const json = await res.json();
    //         Alert.alert("Portales Restaurant", json.msj);
    //         navegarFactura();
    //     } catch (error) {
    //         console.log(error);
    //         Alert.alert("Portales Restaurant", "Error");
    //     }

    // }

    const cancelarFactura = async () => {
        // let estado = "cancelado";
        Alert.alert("Restaurante", "Factura cancelada");
        navegarFactura();
        // actualizarEstado(estado);
    }

    const navegarFactura = async () => {
        await AsyncStorage.removeItem("cart")
        console.log("Reiniciando el AsyncStorage");
        navigation.navigate('MainCategories')

    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZE.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        // source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZE.padding * 3,
                            borderRadius: SIZE.radius,
                            backgroundColor: COLORS.lightGray3,
                        }}
                    >
                        <Text style={styles.h5}>Carrito de Compras</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZE.padding * 2,
                        justifyContent: "center",
                    }}
                >
                    <Image
                        //source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const { theme } = useTheme();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor="#808080" />
            {renderHeader()}

            <View style={styles.view}>
                <Text style={styles.text} h2 h1Style={{ color: theme?.colors?.black }}>
                    Factura
                </Text>
            </View>

            <View style={styles.totales}>
            <View style={styles.duo}>
                    <Text
                        style={styles.text}
                        h4
                        h4Style={{ color: theme?.colors?.primary }}>
                        Fecha de factura:
                    </Text>
                        <Text h3 style={styles.text}>
                            {fecha}
                        </Text>
                </View>
                <View style={styles.duo}>
                    <Text
                        style={styles.text}
                        h4
                        h4Style={{ color: theme?.colors?.primary }}>
                        SubTotal:
                    </Text>
                    <Text h3 style={styles.text}>L.
                        <Text h3 style={styles.text}>
                            {carItems.total.toFixed(2)}
                        </Text>
                    </Text>
                </View>

                <View style={styles.duo}>
                    <Text
                        style={styles.text}
                        h4
                        h4Style={{ color: theme?.colors?.primary }}>
                        Impuesto:
                    </Text>
                    <Text h3 style={styles.text}>L.
                        <Text h3 style={styles.text}>
                            {ISV.toFixed(2)}
                        </Text>
                    </Text>
                </View>

                <View style={styles.duo}>
                    <Text
                        style={styles.text}
                        h4
                        h4Style={{ color: theme?.colors?.primary }}>
                        Total de la compra:
                    </Text>
                    <Text h3 style={styles.text}>L
                        <Text h3 style={styles.text}>
                            {total2.toFixed(2)}
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Confirmar"
                    buttonStyle={{
                        height: 50,
                        backgroundColor: "rgba(57, 146, 146, 1)",
                        borderColor: "white",
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 250,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: "bold" }}
                    onPress={insertarFactura}
                />
                <Button
                    title="Cancelar pedido"
                    buttonStyle={{
                        height: 50,
                        backgroundColor: 'rgba(214, 61, 57, 1)',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 250,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    onPress={cancelarFactura}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    totales: {
        flex: 1,
        marginTop: 10,
    },
    view: {
        margin: 10,
    },
    duo: {
        margin: 20,
    },
    text: {
        textAlign: "center",
        padding: 5,
    },
    more: {
        marginVertical: 20,
    },
    button: {
        width: 120,
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginVertical: 50,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
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

export default Factura;
