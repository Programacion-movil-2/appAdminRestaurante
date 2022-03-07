import React from 'react';
import{View, Text, StyleSheet}from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

import{
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput

}from "../../components";
import{FONTS, SIZES, COLORS, icons, dummyData} from "../../components";

const MyCart = ({ navigation }) => {

    const [MyCartList, setMyCartList] = React.useState({id: 1, name: "Fast Food", icon: ""})

    //Funcion del header
    function renderHeader(){
        return(
            <Header
                //Título de la pantalla
                title = "MY CART - Mis Productos"
                containerStyle = {{
                    height: 50,
                    marginHorizontal: 24,
                    marginTop:40
                }}
                leftComponent = {
                    <IconButton
                        icon = {icons.back}
                        containerStyle = {{
                            with: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: 0,
                            borderColor: "#0B5345"
                        }}
                        iconStyle = {{
                            width: 20,
                            height: 20,
                            tintColor: "#808080"
                        }}
                        //Con este boton vamos a regresar a los detalles de la comida y categorias
                        onPress = {() => navigation.goBack()}
                    />
                }
                rightComponent = {
                    <CartQuantityButton
                        quantity = {3}
                    />
                }
            />
        )
    }

    function renderCartList(){
        return(
            <SwipeListView
                data = {MyCartList}
                keyExtractor = {item => `${item.id}`}
                contentContainerStyle = {{
                    marginTop: 12,
                    paddingHorizontal: 24,
                    paddingBottom: 24 * 2
                }}
                disableRightSwipe = {true}
                rightOpenValue = {-75}
                renderItem = {(data, rowMap) => (
                    <View
                        style = {{
                            height: 100,
                            backgroundColor: "#F6F6F7",
                            //Por medio de esta función creamos la división de los cantiner de los productos
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image */}
                        <View
                            style = {{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source = {data.item.image}
                                resizeMode = "contain"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10
                                }}
                            />
                        </View>
                    </View>
                )}
            />
        )
    }

    return(
        <View
            style = {{
                flex:1,
                backgroundColor: "#fff"
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 12,
        borderRadius: 12
    }
})
export default MyCart;