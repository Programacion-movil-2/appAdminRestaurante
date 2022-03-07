import React from 'react';
import{
    View,
    Text
}from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

import{
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput

}from "../../componentes";
import{FONTS, SIZES, COLORS, icons, dummyData} from "../../componentes";

const MyCart = ({ navigation }) => {

    const [MyCartList, setMyCartList] = React.useState(dummyData.myCart)

    //Funcion del header
    function renderHeader(){
        return(
            <Header
                //Título de la pantalla
                title = "MY CART - Mis Productos"
                containerStyle = {{
                    height: 50,
                    marginHorizontal: SIZES.padding,
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
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle = {{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
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
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe = {true}
                rightOpenValue = {-75}
                renderItem = {(data, rowMap) => (
                    <View
                        style = {{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
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
                backgroundColor: COLORS.white
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
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})
export default MyCart;