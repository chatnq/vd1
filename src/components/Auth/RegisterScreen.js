import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


export default class UserRegister extends Component {
    onClickInputOTP(){
        this.props.navigation.navigate('InputOTPScreen');
        console.log('Click Login...');
     };
     onClickRegister(){
        this.props.navigation.navigate('Registerscreen');
        console.log('Click Register...');
    };
    render() {
        return (
        <View>  
            <View>
                <Text> Loading... </Text>
            </View>
            <View>
                <Text> Đăng ký tài khoản Page </Text>
            </View>        
            <View style={{width: 200, height: 40, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onClickRegister.bind(this)}                      
                        title="Đăng Ký"                       
                    />
            </View>
            <View style={{width: 200, height: 40, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onClickInputOTP.bind(this)}                      
                        title="Nhập OTP"                       
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
      padding: 10,
      height: 40,
      alignContent:'center'
    },
    
})