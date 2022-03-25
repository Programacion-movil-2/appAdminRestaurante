import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, TextInput, Alert, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logoportalesw-preview.png';
import CustomButton from '../../elements/login/customButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import icons from '../../constants/icons';
import {SIZE, COLORS} from '../../constants';

const UserProfile= ({navigation}) =>{
    const { height } = useWindowDimensions();

    function renderHeader(){
        return(

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
                        <Text style ={styles.h5} >Your Profile</Text>
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

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

            {renderHeader()}

            <View style={styles.root}>
                
                <Image source={Logo} 
                    style={[styles.logo, {height: height * 0.2}]} 
                    resizeMode="contain" 
                />
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>

                <Image
                   source={icons.user}
                   resizeMode="contain"
                   style={{
                    width: 80,
                    height: 80
                }}
                /> 

                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>

                <CustomButton
                
                    text={"Modify Password"}
                    onPress={() =>{navigation.navigate('ForgotPassword')}}

                />

                <Text style={styles.text1}>
                    ' '
                </Text>
                <Text style={styles.text1}>
                    ' '
                </Text>

                <CustomButton
                    text="Sign Out"
                    bgColor="rgb(250, 233, 234)"
                    fgColor="rgb(221, 77, 68)"

                    onPress={() =>{navigation.navigate('SignIn')}}
                />  

            </View>

        </ScrollView>

    );

}

const styles = StyleSheet.create({

    root:{

        alignItems:'center',
        padding: 15,        

    },

    logo:{
        width: '90%',
        maxWidth: 400,
        maxHeight: 300,
    },

    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        margin: 8
    },

    title:{

        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        paddingVertical: 30

    },

    text1:{
        color: '#F9F8FC'
    },

    input:{

        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,

        height: 52,
        fontSize: 16,
    },

    text1:{
        color: '#F9F8FC'
    },

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

})

export default UserProfile