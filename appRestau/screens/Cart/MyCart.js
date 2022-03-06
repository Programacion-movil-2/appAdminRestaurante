import React from 'react';
import{
    View,
    Text
}from 'react-native';

import{
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput

}from "../../componentes";
import{FONTS, SIZES, COLORS, icons, dummyData} from "../../componentes";

const MyCart = ({ navigation }) => {

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

            {/* Footer */}
        </View>
    )
}

export default MyCart;