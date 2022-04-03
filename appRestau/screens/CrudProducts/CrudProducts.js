import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    StatusBar,
    Picker,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import {
    Text,
    Card,
    Button,
    Icon,
    useTheme,
    Input,
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
  import DropDown from "react-native-dropdown-picker";
  
  const InsertProduct = ({ route, navigation }) => {
    const {IDPRODUCTO, NOMBRE, precio, LINKIMAGEN, DESCRIPCION} = route.params;
    
    const [nombre, setNombre] = useState(NOMBRE);
    const [PRECIO, setPRECIO] = useState(precio);
    const [descripcion, setDescripcion] = useState(DESCRIPCION);
    const [imagen, setImagen] = useState(LINKIMAGEN);
    const [open, setOpen] = useState(false);
    const [idTipoProducto, setIdTipoProducto] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const [tipoProductoList, setTipoProductoList] = useState(null);
    const [tipoProducto, setTipoProducto] = useState(null);
    // const [items, setItems] = useState([{ label: 'Desayuno', value: '3' },
    // { label: 'Almuerzo', value: '4' },
    // { label: 'Cena', value: '5' },
    // { label: 'Bebida fría', value: '6' },
    // { label: 'Bebida caliente', value: '7' }
    // ]);
  
    const obtenerTipos = async() => {
      try {
        const respt = await fetch(
          "http://192.168.100.8:5000/api/tipoProductos/listarTipoNombre"
        );
  
        const json = await respt.json();
        setTipoProductoList(json);
        // {
        //     tipos.map((name) => (
        //         console.log(name.nombre),
        //         console.log(name.idTipoProducto)
        //     ))
        // }
      } catch (error) {
        console.log(error);
      }
    }
  
    useState(() => {
      obtenerTipos();
    }, []);
  
    const insertarProducto = async () => {
      const re = /^[0-9\b]+$/;
      if (!nombre || !precio || !idTipoProducto) {
        console.log("Debe llenar todos los campos oblicatorios");
        Alert.alert("Restaurante", "Debe llenar todos los campos obligatorios");
      } else if (!re.test(precio) || re.test(nombre)) {
        console.log("Datos incorrectos");
        Alert.alert("Restaurante", "Ingrese correctamente los datos");
      } else {
        try {
          const res = await fetch(
            "http://192.168.0.2:5000/api/productos/guardar",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen,
                descripcion: descripcion,
                idTipoProducto: idTipoProducto,
              }),
            }
          );
          const json = await res.json();
          Alert.alert("Portales Restaurant", json.msj);
          navigation.navigate("Products");
        } catch (error) {
          console.log(error);
          Alert.alert("Portales Restaurant", "Error");
        }
      }
    };
  
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
    if (tipoProductoList != null) {
      let dataArr = Array.from(tipoProductoList);
  
      return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <StatusBar hidden={false} backgroundColor="#000000" />
          {renderHeader()}
    
          <View style={styles.Encabezado}>
            <Text style={styles.text} h4 h1Style={{ color: theme?.colors?.black }}>
              Nombre
            </Text>
            <Input
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
    
            <Text style={styles.text} h4 h1Style={{ color: theme?.colors?.black }}>
              Precio
            </Text>
            <Input
              style={styles.input}
              placeholder="Precio"
              value={PRECIO.toString()}
              onChangeText={setPRECIO}
            />
    
            <Text style={styles.text} h4 h1Style={{ color: theme?.colors?.black }}>
              Link Imagen
            </Text>
            <Input
              style={styles.input}
              placeholder="Link"
              value={imagen}
              onChangeText={setImagen}
            />
    
            <Text style={styles.text} h4 h1Style={{ color: theme?.colors?.black }}>
              Descripción
            </Text>
            <Input
              style={styles.input}
              placeholder="Descripción"
              value={descripcion}
              onChangeText={setDescripcion}
            />
          </View>
    
          <View style={styles.buttonsContainer}>
            <Button
              title="Guardar"
              icon={{
                name: "arrow-left",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(23, 159, 3, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={insertarProducto}
            />
          </View>
        </ScrollView>
      );
    }
    else{
      return null;
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Encabezado: {
      paddingVertical: 50,
      alignItems: "center",
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: "row",
      marginBottom: 6,
    },
    text: {
      textAlign: "center",
      padding: 5,
    },
    picker: {
      marginBottom: 10,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    buttonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginVertical: 20,
      marginTop: 70,
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
  
  export default InsertProduct;
  