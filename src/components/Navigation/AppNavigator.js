import React from 'react';
import { BackHandler } from 'react-native'
import { addNavigationHelpers, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
import MySwitchNavigator from './navigationStack';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class AppWithNavigationState extends React.Component {
    render(){
        return <MySwitchNavigator /> 
    }
};
 //               navigation={{dispatch, state: nav,}} 
                 
               
/*
class AppNavigator extends React.Component {
    render(){
        return <NavigatorStack />rr
    react-navigation-redux-helpers}
}
*/
const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);
