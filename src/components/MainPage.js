import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
//import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
        headerTitle: 'Trang chủ'        
      }
      };

    onChooseColor() {
        this.props.navigation.navigate('ChooseColor');
    }
    onLoginpage() {
        this.props.navigation.navigate('Login');
    }
    selectedColor() {
        const { colorName } = this.props;
        return COLORS[colorName].hexCode;
    }
    onOpenDrawer() {
        this.props.navigation.openDrawer();
    }
    
    render() {
        const color = this.selectedColor();
        const { navigation } = this.props;
        const UserID = navigation.getParam('UserID', 'NO-ID');
        const MatkhauID = navigation.getParam('MatkhauID', '123456');
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', alignItems:'center', backgroundColor: color }}>
                <View style={{width: 150, height: 50, alignContent: 'center', paddingTop: 20 }}>
                    <Button 
                        onPress={this.onChooseColor.bind(this)}
                        color="#222"
                        title="Thay màu nền"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                 </View>
                 <View style={{width: 150, height: 50, alignContent: 'center', paddingTop: 10 }}>
                    <Button 
                        onPress={this.onLoginpage.bind(this)}
                        color="#222"
                        title="Đăng nhập"
                     />
                 </View>
                 <View style={{width: 150, height: 50, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onOpenDrawer.bind(this)}
                        color="#222"
                        title="Menu"
                     />
                 </View>
                 <View>
                     <Text>User name: {UserID } Password: {MatkhauID }</Text>
                 </View>
            </View>
        )
    }
}
//console.error();

const mapStateToProps = state => {
    return { 
        colorName: state.color.colorName,
        MyuserName: state.usern
     };
};
console.log("Bien mau" );
//console.log ("MyuserName", MyuserName);
export default connect(mapStateToProps)(MainPage);

