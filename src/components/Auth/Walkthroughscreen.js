import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


export default class Walkthrough extends Component {
    onClickLogin(){
        this.props.navigation.navigate('LoginScreen');
        console.log('Click Login...');
     };
     onClickRegister(){
        this.props.navigation.navigate('RegisterScreen');
        console.log('Click Register...');
    };
    render() {
        return (
        <View style={styles.container}>  
            <View>
                <Text> Loading... </Text>
            </View>
            <View>
                <Text> Walkthrough Page </Text>
            </View>            
            <View style={styles.button}>
                    <Button 
                        onPress={this.onClickLogin.bind(this)}                      
                        title="Đăng nhập"                       
                    />
            </View> 
            <View style={styles.button}>
                    <Button 
                        onPress={this.onClickRegister.bind(this)}                      
                        title="Đăng Ký"                       
                    />
            </View>    
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,      
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',      
      height: 40, 
      width: 200,
      alignContent:'center'
    },
    
})