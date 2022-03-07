import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';

import fondo from './assets/fondoLogin.jpg';
import LNavigation from './navigation/index';
import CreatePerson from './screens/CreatePerson/CreatePerson';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from './screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from './screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from './screens/NewPassword/NewPassword';

export default class App extends React.Component {
  render(){
    return (

      <SafeAreaView style={styles.container}>
            
        <SignUpScreen />
      
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
    padding: 20,
    //justifyContent: 'center',
  },

});
