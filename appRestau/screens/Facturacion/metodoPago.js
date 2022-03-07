import { SafeAreaView, StyleSheet, View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { Text, useTheme, Button, ButtonGroup, withTheme } from "react-native-elements";
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';

const MetodoPago = () => {
  
  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={icons.nearby}
            resizeSMode="contain"
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
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius
            }}
          >
            <Text style={{ ...FONT.h3 }}>Location</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
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
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.view}>
        <Text
          style={styles.text}
          h1
          h1Style={{ color: theme?.colors?.black }}
        >
          Elija un método de pago
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Efectivo"
          icon={{
            name: 'money',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(94, 145, 35, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Tarjeta"
          icon={{
            name: 'credit-card',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
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

});

export default MetodoPago