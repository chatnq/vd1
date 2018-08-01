import React from 'react';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainPage from '../Main/MainPage';
import ChooseColorPage from '../Main/ChooseColorPage';
import Menu from './Menu';
import Walkthrough from '../Auth/Walkthroughscreen';
import LoginScreen from '../Auth/LoginScreen';
import LoadingScreen from '../LoadingScreen';
import InputOTP from '../Auth/InputOTP'
//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
import UserRegister from '../Auth/RegisterScreen';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export const MainStack = createStackNavigator(
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
             headerTitle: 'Đổi màu'   
        } 
    }, 
    /*TabNavigatorStack: { 
        screen: ChooseColorPage, 
        navigationOptions: {
             headerTitle: 'Đổi màu'   
        } 
    },  */  
});
export const TabNavigatorStack= createBottomTabNavigator(
    {
        Home: {
          screen: MainStack,
          navigationOptions: {
            headerTitle: 'Trang chu',
            tabBarLabel: 'Home',
          },
        },
        Settings: {
            screen: ChooseColorPage,
            navigationOptions: {
                headerTitle: 'Thiet lap',
                tabBarLabel: 'Setting',
         } },
    },
);
export const AuthStack = createStackNavigator(
    {
        WalkthroughScreen: { 
            screen: Walkthrough, 
            navigationOptions: {
                header: null,
            } 
        },
        LoginScreen: { 
            screen: LoginScreen,
            navigationOptions: {
                headerTitle: 'Đăng nhập'                
            }  
        },
        RegisterScreen: { 
            screen: UserRegister,
            navigationOptions: {
            headerTitle: 'Đăng ký'                    
            }  
        },
        InputOTPScreen: { 
            screen: InputOTP,
            navigationOptions: {
            headerTitle: 'Input OTP'                       
            }  
        }
    },
    {
        initialRouteName: 'WalkthroughScreen',
        navigationOptions: {
            headerStyle: {
              backgroundColor: '#225',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        },  
    }
);

   
export const MyDrawerStack= createDrawerNavigator(
    {
        TabMenu: {
          screen: TabNavigatorStack},
    },
    {
       drawerWidth: 300,
       drawerPosition: 'left',
       contentComponent: props => <Menu {...props} />
    }
);

export const MySwitchNavigator= createSwitchNavigator (
    {
      AuthLoading: LoadingScreen,
      App: MyDrawerStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );
export default MySwitchNavigator
  

