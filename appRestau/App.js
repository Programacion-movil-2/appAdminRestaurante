import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainCategorias from './screens/MainCategorias';

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaView>
        <MainCategorias/>
      </SafeAreaView>
    );
  } 
}