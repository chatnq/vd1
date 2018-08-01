import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../../state/Colors.js';

class Loginpage extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
            return {
            headerTitle: 'Login'        
            }
        };
  constructor(props) {
        super(props);
        this.state = {nguoidung: ''};
        this.state = {matkhau: ''};
        
} 
    
    onClickDangNhap() {
        let n = this.state.nguoidung;
        let m = this.state.matkhau;
        console.log(n);
        console.log(m);
        alert(m);
        this.props.navigation.navigate('Main',{
            UserID: n ,
            MatkhauID: m,
          });
    };
    
    render() {
        const usernameNhap = this.props.usern;

        return (
            <View style={styles.container}>
                <View style={{padding: 10}}>
                    <View>
                        <Text> UserName:</Text><TextInput
                        style={styles.textInput}
                        placeholder="Type Username" 
                        onChangeText={(nguoidung) => this.setState({nguoidung })}
                       // onChangeText={(text) => this.props.dispatch({type:'USERNAME_CHANGE'})}                      
                        />
                    </View>
                    <View>
                        <Text> Password</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.textInput}
                        placeholder="Password pls"
                        onChangeText={(matkhau) => this.setState({matkhau})}
                        />
                    </View>
                    <View>                       
                    </View>
                </View>
                <View style={{width: 200, height: 40, alignContent: 'center' }}>
                    <Button 
                        onPress={this.onClickDangNhap.bind(this)}
                        //color="#222"
                        title="Đăng nhập"                       
                    />
                 </View> 
                 <View>
                        <Text>{this.state.nguoidung } </Text>
                </View>  
                <View>
                        <Text>{this.state.matkhau } </Text>
                </View>              
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { usernameNhap: state.usern };
    console.log("tham so user", this.props.usernameNhap);
};

export default connect(mapStateToProps)(Loginpage);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    }
});