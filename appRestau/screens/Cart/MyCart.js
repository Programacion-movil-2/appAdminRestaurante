import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList, Text, Animated } from 'react-native';
import { withTheme, useTheme, ButtonGroup, Card, Button, Icon } from 'react-native-elements';
import { icons, SIZES, SIZE, COLORS, FONT, FONTS, images } from '../../constants';
import { useState } from 'react';

const users = [
];

const Contador = () => {
  const[contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
}

const MyCart = ({navigation}) => {

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
                    <Text style ={styles.h5} >Carrito de Compras</Text>
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

                      <View style={styles.buttonsContainer}>
                        <Button
                          title="     -"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={() => Contador.restar}
                        />
                        <Text 
                          style={{ fontWeight: 'bold', fontSize: 23 , color:"white", 
                          borderColor: "transparent", backgroundColor: "rgb(21, 19, 19)",
                          width: 50}}
                        >Contador</Text>
                        <Button
                          title="     +"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={Contador.sumar}
                        />
                    </View>
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

                          <View style={styles.buttonsContainer}>
                        <Button
                          title="     -"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={() => navigation.navigate("CashDetails")}
                        />
                        <Text 
                          style={{ fontWeight: 'bold', fontSize: 23 , color:"white", 
                          borderColor: "transparent", backgroundColor: "rgb(21, 19, 19)",
                          width: 50}}
                        >    5</Text>
                        <Button
                          title="     +"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={() => navigation.navigate("CardDetails")}
                        />
                      </View>
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
                
                <View style={styles.buttonsContainer}>
                        <Button
                          title="     -"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={() => navigation.navigate("CashDetails")}
                        />
                        <Text 
                          style={{ fontWeight: 'bold', fontSize: 23 , color:"white", 
                          borderColor: "transparent", backgroundColor: "rgb(21, 19, 19)",
                          width: 50}}
                        >    5</Text>
                        <Button
                          title="     +"
                          icon={{
                            name: "",
                            type: "font-awesome",
                            size: 15,
                            color: "white",
                          }}
                          iconRight
                          iconContainerStyle={{ marginLeft: 10 }}
                          titleStyle={{ fontWeight: "700" }}
                          buttonStyle={{
                            backgroundColor: "rgb(21, 19, 19)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 0,
                          }}
                          containerStyle={{
                            width: 50,
                            marginHorizontal: 10,
                            marginVertical: 10,
                          }}
                          onPress={() => navigation.navigate("CardDetails")}
                        />
                      </View>
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