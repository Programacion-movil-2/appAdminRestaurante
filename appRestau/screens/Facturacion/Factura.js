import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { Text, useTheme, Button, ButtonGroup, withTheme, Input } from "react-native-elements";
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';

const Factura = () => {

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

    return (
        <View style={styles.container}>
            {renderHeader()}

            <View style={styles.view}>
                <Text
                    style={styles.text}
                    h2
                    h1Style={{ color: theme?.colors?.black }}
                >
                    Factura
                </Text>
            </View>

            <View style={styles.totales}>
                <Text
                    style={styles.text}
                    h4
                    h4Style={{ color: theme?.colors?.primary }}
                >
                    Subtotal: 
                    <Text>
                        L. 400
                    </Text>
                </Text>
                <Text
                    style={styles.text}
                    h4
                    h4Style={{ color: theme?.colors?.primary }}
                >
                    Impuesto:
                    <Text>
                        L. 60
                    </Text>
                </Text>
                <Text
                    style={styles.text}
                    h4
                    h4Style={{ color: theme?.colors?.primary }}
                >
                    Total:
                    <Text>
                        L. 460
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                    <Button
                        title="Confirmar"
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    totales: {
        flex: 1,
        marginTop: 40,
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

export default Factura