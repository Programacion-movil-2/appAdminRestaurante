import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import fondo from './assets/fondoLogin.jpg';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ConfirmEmail from './screens/ConfirmEmail/ConfirmEmail';
import ForgotPwdScreen from './screens/ForgotPwdScreen/ForgotPwdScreen';
import NewPassword from './screens/NewPassword/NewPassword';

export default class App extends React.Component {
  render(){
    return (

      <View style={styles.container}>
            
        <SignInScreen />
      
      </View>
      
  
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

  fondo:{

    resizeMode: 'cover'
  }

});
