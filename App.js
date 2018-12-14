
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Navigation from './nav';
import {Provider} from 'mobx-react';


 
export default class App extends React.Component{
  
    render() {
      return (
          <Provider >
             <Navigation/>
          </Provider>
      );
    }
  }

  