import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class Secondscreen extends React.Component{
    static navigationOption={
      title: 'Second'
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Secondscreen!</Text>
        </View>
      );
    }
  }