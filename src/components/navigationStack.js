import React from 'react';
import { addNavigationHelpers, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';
import Loginpage from './Login';

//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
/*
export const tabNavigator= createBottomTabNavigator(
    {
        homeTab: {
          screen: MainPage,
          navigationOptions: {
            header: null,
            headerTitle: 'HOme',
            tabBarLabel: 'HoMe',
          },
        },
        logintab: {
          screen: Loginpage,
          navigationOptions: {
            headerTitle: 'Login',
            tabBarLabel: 'LoGin',
          },
        },
        changetab: {
            screen: ChooseColorPage,
            navigationOptions: {
              headerTitle: 'Choose Color',
              tabBarLabel: 'Color n',
            },
          },
    });
*/
export const NavigatorStack1 = createStackNavigator(
{
    Main: { 
        screen: MainPage,
        navigationOptions: {
            headerLeft: null,
            headerTitle: 'Trang chủ'   
        }  },
    ChooseColor: { 
        screen: ChooseColorPage, 
        navigationOptions: {
                       headerLeft: null,
                       headerTitle: 'Đổi màu'   
        } 
    },
    Login: {
        screen: Loginpage,
        navigationOptions: {
          //header: null,
          headerTitle: 'Đăng nhập'   
        },
      },
}, 
{
    initialRouteName: 'Main',
    navigationOptions: {
        headerStyle: {
          backgroundColor: '#f45',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },    
});
export const NavigatorStack2 = createStackNavigator(
    {
        ChooseColor: { 
            screen: ChooseColorPage, 
            navigationOptions: {
                headerLeft: null,
            } 
        },
        Main: { 
            screen: MainPage,
            navigationOptions: {
                headerLeft: null,
            }  }
    }
);
export const NavigatorStack= createBottomTabNavigator(
    {
        HOmeTab: {
          screen: NavigatorStack1,},
        UserTab: {
            screen: NavigatorStack2,}
    }
);
export default NavigatorStack
  

