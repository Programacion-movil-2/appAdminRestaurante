import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';

import LNavigation from './navigation/menu';
import MenuAdmin from "./navigation/menuAdmin"

export default class App extends React.Component {
  render(){
    return (
            
        <MenuAdmin />
  
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
    padding: 20,
    //justifyContent: 'center',
  },

});
