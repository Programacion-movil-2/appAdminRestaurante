import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Factura from './screens/Facturacion/Factura';
import MetodoPago from './screens/Facturacion/MetodoPago';
import DetalleEfectivo from './screens/Facturacion/DetalleEfectivo';
import DetalleTarjeta from './screens/Facturacion/DetalleTarjeta';

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaView style={styles.container2}>
        <Factura/>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({

  root:{

    alignContent:'center',
    padding: 50,
    backgroundColor: '#F9F8FC',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F8FC',
    alignItems: 'center',
    padding: 50,
    //justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#F9F8FC',
    paddingTop: 30,
  }

});
