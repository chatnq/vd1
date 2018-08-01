import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';


export default class InputOTP extends Component {
    onClickOK(){
        this.props.navigation.navigate('Main');
        console.log('Click input OTP...');
     };
     onClickBack(){
        this.props.navigation.navigate('LoginScreen');
        console.log('Click Back...');
    };
    render() {
        return (
        <View>  
            <View>
                <Text> Loading... </Text>
            </View>
            <View>
                <Text> Hệ thống vừa nhắn cho bạn OTP. Xin mời bạn nhập mã OTP </Text>
            </View>            
            <View style={{width: 200, height: 40, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onClickOK.bind(this)}                      
                        title="nhập mã OTP"                       
                    />
            </View> 
            <View style={{width: 200, height: 40, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onClickBack.bind(this)}                      
                        title="Gửi lại"                       
                    />
            </View>    
        </View>
        )
    }
}
