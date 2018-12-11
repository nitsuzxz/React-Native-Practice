
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Homescreen from './Page/HomePage';
import Secondscreen from './Page/SecondPage';


const AppNavigator = createStackNavigator({
  
    Home: Homescreen,
    Second: Secondscreen,
  
});

export default createAppContainer(AppNavigator);

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
