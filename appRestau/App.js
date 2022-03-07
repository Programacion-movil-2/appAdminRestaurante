import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Restaurant from './screens/Restaurant';
import MainCategorias from './screens/mainCategorias';

export default class App extends React.Component {
  render(){
    return (

      <SafeAreaView style={styles.container2}>
        <MainCategorias />
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
    // alignItems: 'center',
    //padding: 50,
    //justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#F9F8FC',
    paddingTop: 30,
  }
});
