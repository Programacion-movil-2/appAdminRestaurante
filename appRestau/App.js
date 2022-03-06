import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SinginScreen from './screens/SinginScreen';
import MyCard from './screens/Tarjeta/MyCard';

export default class App extends React.Component {
  render(){
    return (

      <SafeAreaView style={styles.root}>
        <MyCard />
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
});
