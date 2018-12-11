import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import * as firebase from 'firebase';
import Navigation from './nav';

const firebaseConfig = {
    apiKey: "AIzaSyCs5YP_6G16cvHGHiu5j-gUxs4gNnoLfS8",
    authDomain: "byexpo-504b2.firebaseapp.com",
    databaseURL: "https://byexpo-504b2.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(firebaseConfig);


export default class App extends React.Component{
    render() {
      return (
          <Navigation/>
      );
    }
  }