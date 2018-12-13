
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Register extends React.Component{

    static navigationOption={
      title: 'Register'
    }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Register!</Text>
        <Button
          title='go to secondscreen'
          onPress={() => this.props.navigation.navigate('Second')}/>
  
      </View>
    );
  }
}

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