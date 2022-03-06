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

import { icons,images, SIZE, COLORS, FONT } from '../constants'
const MainCategorias = () => {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZE.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
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
                            height: "100",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZE.radius
                        }}
                    >
                        <Text style={{ ...FONT.h3 }}>Location</Text>
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
                    


return (
            <SafeAreaView style={Styles.container}>
                {renderHeader()}
            </SafeAreaView>
        )
    }
    const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.lightGray4
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

        }
    })

    export default MainCategorias;