import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView, StatusBar} from "react-native";
import React, { forwardRef } from 'react';
import { Text, Card, Button, useTheme, Icon } from 'react-native-elements';
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
                        <Text style={styles.h5} >Productos</Text>
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
            <StatusBar
                hidden={false}
                backgroundColor="#000000" />
            {renderHeader()}

            <View style={styles.Encabezado}>
                <Text
                    style={styles.text}
                    h2
                >
                    Productos
                </Text>
            </View>

            {/* <MaterialTable
                data={DEMO_DATA}
                columns={DEMO_COLS}
                icons={TABLE_ICONS}
                actions={[
                    {
                        icon: () => <SaveIcon />,
                        tooltip: "Save User",
                        onClick: (event, rowData) => {
                            const rowJson = JSON.stringify(rowData, null, 2);
                            alert(`Do save operation : ${rowJson}`);
                        },
                    },
                ]}
            /> */}

            <View style={styles.Table}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>ID</DataTable.Title>
                        <DataTable.Title>Nombre</DataTable.Title>
                        <DataTable.Title>Precio</DataTable.Title>
                    </DataTable.Header>

                    <TouchableOpacity
                    // onPress={() => navigation.navigate('InsertProduct')}
                    >
                        <DataTable.Row>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell>Hamburguesa</DataTable.Cell>
                            <DataTable.Cell>250</DataTable.Cell>
                        </DataTable.Row>
                    </TouchableOpacity>

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
            {/* <Icon
                name='pencil'
                type='evilicon'
                color='#0900FF'
            />
            <Icon
                name='trash'
                type='evilicon'
                color='#FF2D00'
            /> */}
            <View style={styles.view}>
                <Text
                    style={styles.text}
                    h4
                    h4Style={{ color: theme?.colors?.success }}>
                    Añadir producto
                </Text>
                <Icon
                    name='plus'
                    type='font-awesome'
                    color='#008000'
                    onPress={() => navigation.navigate('InsertProduct')}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        marginTop: 20,
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
    Encabezado: {
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