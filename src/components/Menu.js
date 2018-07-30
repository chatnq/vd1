import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Menu extends Component {
    state = {  }
    render() {
        return (
            <Button
            onPress={() => this.props.navigation.closeDrawer()}
            title="Go back home"
          /> 
        );
    }
}