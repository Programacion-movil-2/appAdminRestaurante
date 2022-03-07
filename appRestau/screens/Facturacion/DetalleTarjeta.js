import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from 'react';
import { Text, useTheme, Button, ButtonGroup, withTheme, Input, CheckBox, Icon } from "react-native-elements";
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';

const DetalleEfectivo = () => {
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeSMode="contain"
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
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONT.h3 }}>Location</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
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

    const { theme } = useTheme();

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    return (

        <View style={styles.container}>
            {renderHeader()}
            <View style={styles.view}>
                <Text
                    style={styles.text}
                    h2
                    h1Style={{ color: theme?.colors?.black }}
                >
                    Detalle de la orden
                </Text>

                <View>
                    <View style={styles.view}>
                        <Text
                            style={styles.text}
                            h3
                            h1Style={{ color: theme?.colors?.black }}
                        >
                            Información de la tarjeta
                        </Text>
                    </View>

                    <View style={styles.view}>

                        <CheckBox
                            center
                            title="Visa"
                            checked={check1}
                            onPress={() => setCheck1(!check1)}

                        />
                        <CheckBox
                            center
                            title="Master Card"
                            checked={check2}
                            onPress={() => setCheck2(!check2)}
                        />
                    </View>

                    <View style={styles.view}>
                        <Input
                            placeholder='Número de tarjeta'
                        />

                        <Text
                            style={styles.text}
                            h4
                            h1Style={{ color: theme?.colors?.black }}
                        >
                            Fecha de vencimiento
                        </Text>
                        <Input
                            placeholder='MM/YY'
                        />

                        <Input
                            placeholder='CVV'
                        />
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <Button
                        title="Procesar mi orden"
                        buttonStyle={{
                            backgroundColor: 'rgba(57, 146, 146, 1)',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    view: {
        margin: 10,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
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

export default DetalleEfectivo