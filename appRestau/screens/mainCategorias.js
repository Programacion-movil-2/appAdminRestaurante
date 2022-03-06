import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import {icons,images,SIZE,COLORS,FONT} from '../constants'
const MainCategorias = () =>{

    function renderHeader() {
        return(
            <view>
                
            </view>
        )
        
    }


    return(
        <SafeAreaView style={Styles.container}>
        {renderHeader()}
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightGray4
    },
    shadow:{
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1,

    }
})

export default MainCategorias;