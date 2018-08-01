import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class LoadingScreen extends Component {
    onClickLogin(){
       this.props.navigation.navigate('WalkthroughScreen');
       console.log('Click bỏ qua...');
    };
    onClickMain(){
        this.props.navigation.navigate('Main');
        console.log('Click bỏ qua...');
     };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text> Loading... </Text>
                </View>
                <View style={styles.button}>
                    <Button 
                        onPress={this.onClickLogin.bind(this)}                      
                        title="Bạn chưa đăng nhập, xin mời đăng nhập"                       
                    />
                 </View>
                 <View style={styles.button}>
                    <Button 
                        onPress={this.onClickMain.bind(this)}                      
                        title="Bạn đã đăng nhập, goto Main"                       
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