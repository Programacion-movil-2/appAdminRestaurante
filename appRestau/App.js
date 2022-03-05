import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixedHeader from './elements/fixedHeader';
import Inputs from './elements/inputs';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
    //   <View>
    //     <FixedHeader/>
    //   </View>
    //   <Inputs name="Email" icon="user"/>
      
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
