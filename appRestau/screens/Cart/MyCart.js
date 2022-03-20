import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { withTheme, useTheme, ButtonGroup, Text, Card, Button, Icon } from 'react-native-elements';
import { icons, SIZES, SIZE, COLORS, FONT, FONTS, images } from '../../constants';


const users = [
    
  ];

const MyCart = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeSMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONT.h3 }}>Carrito de Compras</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  /********************************************************************************************************* */
  return(
    <View style={styles.container}>
    {renderHeader()}
        <ScrollView>
            <View>
                <View>
                    <Card>
                      <Card.Title style={{margin: 6, textAlign:'center'}}>
                        HAMBURGUESA ANGUS</Card.Title>
                      
                      <Card.Image
                        style={{ padding: 0 }}
                        source={{
                          uri:
                            'http://bostonschihuahua.com.mx/wp-content/uploads/2015/09/sandyhamb-bbqbluecheese-2x.jpg',
                        }}
                          />
                          <Text style={{ marginBottom: 10, margin: 14, textAlign:'center' }}>
                          Jugosa hamburguesa cubierta con crujientes tiras de cebolla y blue cheese, 
                          bañados con salsa BBQ, acompañada de ensalada de col tipo Baja.
                          </Text>

                          <Button
                              loading={false}
                              loadingProps={{ size: 'small', color: 'white' }}
                              buttonStyle={{
                                backgroundColor: 'rgb(21, 19, 19 )',
                                borderRadius: 5,
                                marginLeft: 50,
                                marginRight: 0,
                                marginBottom: 0,
                              }}
                              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                              containerStyle={{
                              marginHorizontal: 50,
                              height: 50,
                              width: 200,
                              marginVertical: 10,
                              }}
                              onPress={() => console.log('aye')}
                              title="-   1   +"
                          />
                  </Card>
                </View>

                <View>
                    <Card>
                      <Card.Title style={{margin: 6, textAlign:'center'}}>
                        LASAÑA ITALIANA</Card.Title>
                      
                      <Card.Image
                        style={{ padding: 0 }}
                        source={{
                          uri:
                            'https://pm1.narvii.com/6719/d40f6350d1db983e352b5c865938f2880b51f2ff_hq.jpg',
                        }}
                          />
                          <Text style={{ marginBottom: 10, margin: 14, textAlign:'center' }}>
                          Deliciosa pasta italiana cortada en forma de anchas cintas que pueden poseer 
                          una forma lisa u ondulada, incluso distintos colores dependiendo de la verdura 
                          con la que se deseen entintar.
                          </Text>

                          <Button
                              loading={false}
                              loadingProps={{ size: 'small', color: 'white' }}
                              buttonStyle={{
                                backgroundColor: 'rgb(21, 19, 19 )',
                                borderRadius: 5,
                                marginLeft: 50,
                                marginRight: 0,
                                marginBottom: 0,
                              }}
                              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                              containerStyle={{
                              marginHorizontal: 50,
                              height: 50,
                              width: 200,
                              marginVertical: 10,
                              }}
                              onPress={() => console.log('aye')}
                              title="-   1   +"
                          />
                  </Card>
                </View>

                <View>
                    <Card>
                      <Card.Title style={{margin: 6, textAlign:'center'}}
                      >SUSHI</Card.Title>
                      
                      <Card.Image
                        style={{ padding: 0 }}
                        source={{
                          uri:
                            'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/10/15/5e9977d4903ac.jpeg',
                        }}
                          />
                          <Text style={{ marginBottom: 10, margin: 14, textAlign:'center' }}>
                          Seleccionar frutas y verduras frescas para hacer platos de alta calidad 
                          (como aguacate, mango y zanahorias), disfruta en familia de este plato esquisito.
                          </Text>

                          <Button
                              loading={false}
                              loadingProps={{ size: 'small', color: 'white' }}
                              buttonStyle={{
                                backgroundColor: 'rgb(21, 19, 19 )',
                                borderRadius: 5,
                                marginLeft: 50,
                                marginRight: 0,
                                marginBottom: 0,
                              }}
                              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                              containerStyle={{
                              marginHorizontal: 50,
                              height: 50,
                              width: 200,
                              marginVertical: 10,
                              }}
                              onPress={() => console.log('aye')}
                              title="-   1   +"
                          />
                  </Card>
                </View>

                <View style={styles.buttonsContainer}>
                    <Button
                        title="Procesar mi orden"
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
                        width: 200,
                        marginVertical: 10,
                        }}
                        onPress={() => console.log('aye')}
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