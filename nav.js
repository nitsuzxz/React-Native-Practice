
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Homescreen from './Page/HomePage';
import Secondscreen from './Page/SecondPage';
import LoginScreen from './Page/LoginPage';
import RegisterScreen from './Page/RegisterPage';



const LogReg = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

const AppNavigator = createStackNavigator({
  
    Home: Homescreen,
    Second: Secondscreen,
  
});


export default createAppContainer(LogReg);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
