
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


class Homescreen extends React.Component{

    static navigationOption={
      title: 'Home'
    }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Homescreen!</Text>
        <Button
          title='go to secondscreen'
          onPress={() => this.props.navigation.navigate('Second')}/>
  
      </View>
    );
  }
}