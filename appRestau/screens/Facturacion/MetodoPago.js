import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  Text,
  useTheme,
  Button,
  ButtonGroup,
  withTheme,
} from "react-native-elements";
import {
  icons,
  images,
  SIZES,
  SIZE,
  COLORS,
  FONT,
  FONTS,
} from "../../constants";

const MetodoPago = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZE.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* Restaurant Name Section */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SIZE.padding * 3,
              borderRadius: SIZE.radius,
              backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text style={styles.h5}>Carrito de Compras</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZE.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            //source={icons.basket}
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
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.view}>
        <Text style={styles.text} h1 h1Style={{ color: theme?.colors?.black }}>
          Elija un método de pago
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Efectivo"
          icon={{
            name: "money",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(94, 145, 35, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("CashDetails")}
        />
        <Button
          title="Tarjeta"
          icon={{
            name: "credit-card",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(199, 43, 98, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("CardDetails")}
        />
      </View>
    </View>
  );
};

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
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
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

export default MetodoPago;
