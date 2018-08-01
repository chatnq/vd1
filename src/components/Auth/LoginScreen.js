import React, { Component } from 'react';
import {  
    TouchableWithoutFeedback,
    Text,
    View,
    TextInput,
    Image,
    KeyboardAvoidingView,
    StyleSheet, 
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../util/colors'
import Strings from '../../util/string'
import logoGo from '../../images/logo.png'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
      }
     render() {
        return (
        <View>  
            <View>
                <Text> Login Page </Text>
            </View>
            <View>
                <Text> Loading... </Text>
            </View>
        </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 60,
    },
    inputType: {
      padding: 5,
      alignItems: 'center',
      width: 270,
      borderRadius: 4,
      borderColor: colors.primaryColor,
      flexDirection: 'row',
    },
    iconStyle: {
      marginRight: 10,
    },
    loginStyle: {
      width: 270,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
      marginTop: 40,
      marginBottom: 150,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 100,
    },
    enableButton: {
      backgroundColor: colors.primaryColor,
      padding: 10,
      opacity: 1,
      paddingLeft: 20,
      paddingRight: 20,
      width: 270,
      borderRadius: 20,
      shadowOffset: { width: 2, height: 2 },
      shadowColor: colors.primaryColor,
      shadowOpacity: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledButton: {
      backgroundColor: colors.primaryColor,
      opacity: 1,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      width: 270,
      borderRadius: 20,
      shadowOffset: { width: 2, height: 2 },
      shadowColor: colors.primaryColor,
      shadowOpacity: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  