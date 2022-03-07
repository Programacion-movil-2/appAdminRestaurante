import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-elements";

export function metodoPago() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text
          style={styles.text}
          h1
          h1Style={{ color: theme?.colors?.secondary }}
        >
          Elija un método de pago
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={"Procesar mi orden"}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
});