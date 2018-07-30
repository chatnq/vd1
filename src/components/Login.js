import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../state/Colors.js';

class Loginpage extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
        headerTitle: 'Loginpage'        
      }
      };

    onBack() {
        this.props.navigation.navigate('Main');
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
                        onPress={this.onBack.bind(this)}
                        color="#222"
                        title="Back"                       
                    />
                 </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(Loginpage);

