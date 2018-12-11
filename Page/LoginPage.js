import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import * as firebase from 'firebase';
import {Container, Content, Header, Form, Input , Item, Button, Label} from 'native-base';


const firebaseConfig = {
    apiKey: "AIzaSyCs5YP_6G16cvHGHiu5j-gUxs4gNnoLfS8",
    authDomain: "byexpo-504b2.firebaseapp.com",
    databaseURL: "https://byexpo-504b2.firebaseio.com",
    storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

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
        firebase.auth().createUserWithEmailAndPassword(email,password)

    }
    catch(error){
            console.log(error.toString())
    }

    
}

loginUser=(email,password) =>{
    
    try{

        if(this.state.password.length<6){
            alert('Password is incorrect')
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
            console.log(user)
        })

    }
    catch(error){
            console.log(error.toString())
    }

}

  render() {
    return (
        <Container  style={styles.container}>
            <Form>
            <Image source={{ uri : 'http://enginecluster.reka.com.my/tech/CRETA/resources/img/REKA_symbol.png'}} 
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

                <Button onPress={()=>this.loginUser(this.state.email, this.state.password)} style={{marginTop:20}} regular success full>
                    <Text style={{color: 'white',}}>Login</Text>
                </Button>

                <Button onPress={()=>this.signupUser(this.state.email, this.state.password)} style={{marginTop:20}} regular primary full>
                    <Text style={{color: 'white'}} >Sign In</Text>
                </Button>

                         
                
            </Form> 
        </Container>
        );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

  });