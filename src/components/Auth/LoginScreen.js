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
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider, TouchableOpacity } from '@shoutem/ui'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import colors from '../../util/colors'
import Strings from '../../util/string'
import logoGo from '../../images/logo.png'

const styles =  {
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
};

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
      }
      constructor(props) {
        super(props);
        this.state = { username: 'Nhập tên đăng nhập.' };
        this.state = { password: 'Nhập mật khẩu.' };
      }
     render() {
      const {
        container,
        inputType,
        iconStyle,
        loginStyle,
        logoStyle,
      } = styles

        return (
          <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
          <KeyboardAvoidingView style={container} behavior="padding" enabled>
            <View style={logoStyle}>
              <Image
                source={logoGo}
                resizeMode="stretch"
                style={{
                  width: 154.63,
                  height: 120,
                }}
              />
            </View>
            <View style={loginStyle}>
              <View style={inputType}>
                <TextInput
                  style={{ fontSize: 14, height: 40, borderColor: 'gray', borderWidth: 1 }}
                  placeholder='Nhập tên đăng nhập'
                  onChangeText={username => this.setState({ username })}                
                />
             </View>          
             <View style={inputType}>
                <TextInput
                  style={{ fontSize: 14 }}
                  placeholder='Nhập mật khẩu'
                  onChangeText={password => this.setState({ password })}                
                />
             </View>    
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
                >
                <Text style={{ color: '#f2f', fontWeight: 'bold' }}>Đăng nhập </Text>
              </TouchableOpacity>
              <Text
                style={{
                  paddingTop: 10,
                  paddingBottom: 20,
                  textAlign: 'center',
                  color: colors.textColorGray,
                }}
              >
                'Quên mật khẩu'
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        /*
        <View>  
            <View>
                <Text> Login Page </Text>
            </View>
            <View>
                <Text> Loading... </Text>
            </View>
        </View>
        */
        )
    }
}


  