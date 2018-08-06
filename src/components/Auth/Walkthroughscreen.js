import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import ImageSlider from 'react-native-image-slider';
//import img1 from '../../images/1.jpg';
//import img2 from '../../images/2.jpg';


export default class Walkthrough extends Component {
    onClickLogin(){
        this.props.navigation.navigate('LoginScreen');
        console.log('Click Login...');
     };
     onClickRegister(){
        this.props.navigation.navigate('RegisterScreen');
        console.log('Click Register...');
    };
    render() {
        const images = [
           
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
          ];
        return (
        //<View style={styles.container}>
        <SafeAreaView style={styles.container}>  
            <View style={styles.slide}>
                <Text> Loading... </Text>
                <ImageSlider
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View key={index} style={[style, styles.customSlide]}>
                        <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.buttons}>
                        {images.map((image, index) => {
                            return (
                            <TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => move(index)}
                                style={styles.button}
                            >
                                <Text style={position === index && styles.buttonSelected}>
                                {index + 1}
                                </Text>
                            </TouchableHighlight>
                            );
                        })}
                        </View>
                    )}
                    />
            </View>
            <View style={styles.links}>
                <Text> Tìm hiểu về medihome </Text>
            </View>            
            <View style={styles.links}>
                    <View style={{flex:1, paddingRight: 5,  }}>
                    <Button 
                        onPress={this.onClickLogin.bind(this)}                      
                        title="Đăng nhập"                       
                    />
                    </View>
                    <View style={{flex:1, paddingLeft: 5, }}>
                    <Button 
                        onPress={this.onClickRegister.bind(this)}                      
                        title="Đăng Ký"                       
                    />
                    </View>
            </View> 
            <View style={styles.guide}>
                   <Text>About us</Text> 
            </View>    
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,      
    },
    slide: {
        flex: 7,
        alignItems: 'center',
        backgroundColor: '#DDDDDD', 
        alignContent:'center'
      },
    links: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DDDDDD', 
        alignContent:'center',
        flexDirection: 'row'
      },
   
    guide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',       
        alignContent:'center',
        paddingBottom: 5,
      },
    
})