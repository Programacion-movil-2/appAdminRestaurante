import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import * as React from 'react';
import { Text, Card, Button, Icon, useTheme } from 'react-native-elements';
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const Products = ({ navigation }) => {

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
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {renderHeader()}

            <View style={styles.Encabezado}>
                <Text
                    style={styles.text}
                    h2
                >
                    Productos
                </Text>
            </View>

            <View style={styles.Table}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nombre</DataTable.Title>
                        <DataTable.Title numeric>Precio</DataTable.Title>
                        <DataTable.Title numeric>Estado</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                        <DataTable.Cell numeric>159</DataTable.Cell>
                        <DataTable.Cell numeric>Activo</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                        <DataTable.Cell numeric>237</DataTable.Cell>
                        <DataTable.Cell numeric>Activo</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Hamburguesa</DataTable.Cell>
                        <DataTable.Cell numeric>237</DataTable.Cell>
                        <DataTable.Cell numeric>Activo</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Pagination
                        page={page}
                        numberOfPages={3}
                        onPageChange={(page) => setPage(page)}
                        label="1-2 of 6"
                        optionsPerPage={optionsPerPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        showFastPagination
                        optionsLabel={'Rows per page'}
                    />
                </DataTable>
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
    Table: {
        paddingTop: 50,
    },
    Encabezado:{
        paddingVertical: 20,
    },
    text: {
        textAlign: 'center',
        padding: 5,
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

export default Products