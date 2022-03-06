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
//.....______,_____,_______,carpetaIconos,carpetaComida
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