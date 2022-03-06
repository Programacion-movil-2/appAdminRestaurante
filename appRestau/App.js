import React from 'react';
<<<<<<< HEAD
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SinginScreen from './screens/SinginScreen';

=======
import { StyleSheet, Text, View } from 'react-native';
//import FixedHeader from './elements/fixedHeader';
//import Inputs from './elements/inputs';
import productDetail from './screens/Restaurant';
import MyCard from './screens/Tarjeta/MyCard';
>>>>>>> origin/samuel
export default class App extends React.Component {
  render(){
    return (
<<<<<<< HEAD
=======
      <View>
        <MyCard/>
      </View>

>>>>>>> origin/samuel

      <SafeAreaView style={styles.root}>
        <SinginScreen />
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
