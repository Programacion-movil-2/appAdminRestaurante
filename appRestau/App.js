//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import FixedHeader from './elements/fixedHeader';
//import Inputs from './elements/inputs';
import productDetail from './screens/Restaurant';
import MyCard from './screens/Tarjeta/MyCard';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <MyCard/>
      </View>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
