
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Container, Content, Header, Form, Input , Item, Button, Label} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Fireconfig from '../firebase';


export default class Register extends React.Component{

    static navigationOption={
      title: 'Register'
    }

    constructor(props){
      super(props)
  
      this.state=({
          email:'',
          password:'',
      })
  }

    signupUser=(email,password) =>{

      try{
  
          if(this.state.password.length<6){
              alert('Password incomplete')
              return;
          }
          Fireconfig.auth().createUserWithEmailAndPassword(email,password)

          }
          catch(error){
              console.log(error.toString())
          }
        }
  
  
  
  render() {
    return (
        <Container  style={styles.container}>
            <Form>
            <Image source={{ uri : 'https://andriacorso.com/wp-content/uploads/2015/03/What-Are-You-Waiting-for-image.jpg'}} 
                    style={{width: 200, height: 200, marginLeft:100,marginRight:100,marginBottom:50 }} /> 
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(email)=> this.setState({ email} )}
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      onChangeText={(password)=>this.setState({password})}                  
                      secureTextEntry={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                      
                    />
                </Item>

                <Button onPress={()=>this.signupUser(this.state.email, this.state.password)} style={{marginTop:20}} regular success full>
                    <Text style={{color: 'white',}}>Register Now</Text>
                </Button>

                         
                
            </Form> 
        </Container>
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
  }
});
