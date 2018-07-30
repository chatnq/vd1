import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
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

    render() {
        const color = this.selectedColor();
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: color }}>
                <View style={{width: 200, height: 200, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onChooseColor.bind(this)}
                        color="#222"
                        title="Choose Color"
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
                 <View style={{width: 200, height: 200, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onLoginpage.bind(this)}
                        color="#222"
                        title="Login"
                     />
                 </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(MainPage);

