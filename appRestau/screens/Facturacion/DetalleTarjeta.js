import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  Text,
  useTheme,
  Button,
  ButtonGroup,
  withTheme,
  Input,
  CheckBox,
  Icon,
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

const DetalleEfectivo = ({ navigation }) => {
  const [direccionEntrega, setDireccion] = useState(null);
  let estado = "listo";

  const insertarPedido = async () => {

    if (!direccionEntrega) {
      console.log("Debe llenar todos los campos oblicatorios");
      Alert.alert("Restaurante", "Ingrese todos los campos");
    }
    else {
      navegarFactura();
      // try {
      //   const res = await fetch('http://192.168.0.3:5000/api/pedidos/modificarDireccionEstado?idUsuario=4', {

      //     method: 'PUT',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       direccionEntrega: direccionEntrega,
      //       estado: estado
      //     })

      //   })

      //   const json = await res.json();
      //   Alert.alert("Portales Restaurant", json.msj);

      // } catch (error) {
      //   console.log(error);
      //   Alert.alert("Portales Restaurant", "Error");
      // }
    }

  }

  const navegarFactura = () => {
    navigation.navigate('Billing')

  }

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

  const [visa, setvisa] = useState(false);
  const [mastercard, setmastercard] = useState(false);

  const click = () => {
    if (visa === true) {

    }
    if (mastercard === true) {

    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.view}>
        <Text style={styles.text} h2 h1Style={{ color: theme?.colors?.black }}>
          Detalle de la orden
        </Text>
        <View style={styles.view1}>
          <Text
            style={styles.text}
            h4
            h1Style={{ color: theme?.colors?.black }}
          >
            Dirección de entrega
          </Text>
          <Input
            style={styles.input}
            placeholder='Ej. Barrio San Juan'
            value={direccionEntrega}
            onChangeText={setDireccion}
          />
        </View>
        <View>
          <View style={styles.view}>
            <Text
              style={styles.text}
              h3
              h1Style={{ color: theme?.colors?.black }}
            >
              Información de la tarjeta
            </Text>
          </View>

          <View style={styles.view}>
            <View style={styles.viewChk}>
              <CheckBox
                center
                checked={visa}
                onPress={() => setvisa(!visa)}
              />
              <Image
                source={icons.love}
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </View>

            <View style={styles.viewChk}>
              <CheckBox
                center
                checked={mastercard}
                onPress={() => setmastercard(!mastercard)}
              />
              <Image
                source={icons.master_card}
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </View>
          </View>
          <View style={styles.view}>
            <Input placeholder="Número de tarjeta" />

            <Text
              style={styles.text}
              h4
              h1Style={{ color: theme?.colors?.black }}
            >
              Fecha de vencimiento
            </Text>
            <Input placeholder="MM/YY" />

            <Input placeholder="CVV" />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Procesar mi orden"
            buttonStyle={{
              backgroundColor: "rgba(57, 146, 146, 1)",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={insertarPedido}
          />
        </View>
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
  view1: {
    marginTop: 40,
  },
  viewChk: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
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

export default DetalleEfectivo;
