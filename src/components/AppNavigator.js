import React from 'react';
import { BackHandler } from 'react-native'
import { addNavigationHelpers, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
//import MainPage from './MainPage';
//import ChooseColorPage from './ChooseColorPage';
//import Loginpage from './Login';

//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
import NavigatorStack from './navigationStack';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

/*
export const AppNavigator = createStackNavigator {
    Main: { screen: MainPage },
    ChooseColor: { 
        screen: ChooseColorPage, 
        navigationOptions: {
            headerLeft: null,
        } 
    },
    Login: {
        screen: Loginpage,
        navigationOptions: {
          header: null,
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
 

  export const tabNavigator= new createBottomTabNavigator(
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

/*const RootStack = createStackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);
*/
class AppNavigator extends React.Component {
    render(){
        return <NavigatorStack />
    }
}
const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppNavigator);
