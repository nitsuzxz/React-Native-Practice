global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');
import * as firebase from 'firebase';

const firebaseconfig = {
    apiKey: "AIzaSyAV_7RNfq487Nih7zxFwXVyw-LEpCyALbs",
    authDomain: "fir-e81ee.firebaseapp.com",
    databaseURL: "https://fir-e81ee.firebaseio.com",
    projectId: "fir-e81ee",
    storageBucket: "fir-e81ee.appspot.com",
    messagingSenderId: "724659080856"
  
  };
  const fireconfig=firebase.initializeApp(firebaseconfig);
  
  export default fireconfig;
