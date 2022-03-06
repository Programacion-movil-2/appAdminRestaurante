//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import FixedHeader from './elements/fixedHeader';
//import Inputs from './elements/inputs';
import productDetail from './screens/Restaurant';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <productDetail/>
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
