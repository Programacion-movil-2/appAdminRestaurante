import { SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList, Text, Animated } from 'react-native';
import { withTheme, useTheme, ButtonGroup, Card, Button, Icon } from 'react-native-elements';
import { icons, SIZES, SIZE, COLORS, FONT, FONTS, images } from '../../constants';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCart = ({ route, navigation }) => {
  const [orderItems, setOrderItems] = React.useState(null);

  useEffect(() => {
    existItems();
  },[]);

  const existItems = async () => {
    let cartItemsExist = await AsyncStorage.getItem("cart");

    if (cartItemsExist) {
      let items = JSON.parse(cartItemsExist);
      setOrderItems(items)
    }
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZE.padding * 2,
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('MainCategories')}
        >
          <Image
            source={icons.home}
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

  /********************************************************************************************************* */
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>
        <View>
          <View style={styles.buttonsContainer}>
            <Button
                title="Vaciar Carrito"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'rgba(57, 146, 146, 1)',

                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 300,
                  marginVertical: 10,
                }}

              onPress={async () => {
                  await AsyncStorage.removeItem("cart");
                  setOrderItems(null)
              }}>
            </Button>
          </View>
          {<View>
            {orderItems && orderItems.map(item =>
                // <Text key={item.idProducto}>{item.nombre}</Text>
                <Card key={item.idProducto}>
              <Card.Title style={{ margin: 6, textAlign: 'center' }}>
                {item.nombre}</Card.Title>

              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri:
                    `${item.foto}`
                }}
              />
              
              <View style={styles.buttonsContainer}>
                <Text
                  style={{
                    fontWeight: 'bold', fontSize: 23, color: "white",
                    borderColor: "transparent", backgroundColor: "rgb(21, 19, 19)",
                    width: 50
                  }}
                >    {item.quantity}</Text>
                
              </View>
            </Card>
            )}
            
          </View>}

          <View style={styles.buttonsContainer}>
            <Button
              title="Comprar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(57, 146, 146, 1)',

                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 300,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate('PaymentMethod')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4,
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
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 60,
      height: 50,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
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

  export default MyCart