import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Navigation from './nav';
import {Provider} from 'mobx-react';
import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyAV_7RNfq487Nih7zxFwXVyw-LEpCyALbs",
    authDomain: "fir-e81ee.firebaseapp.com",
    databaseURL: "https://fir-e81ee.firebaseio.com",
    projectId: "fir-e81ee",
    storageBucket: "",

  };
  firebase.initializeApp(config);

export default class App extends React.Component{
    render() {
      return (
          <Provider>
             <Navigation/>
          </Provider>
      );
    }
  }

  