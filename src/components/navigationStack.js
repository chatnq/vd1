import React from 'react';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';
import Loginpage from './Login';
import Menu from './Menu';

//following  code to remove the warning: isMounted ....
//As people on forum said that: this warning was throw out when have conflictiion between react-native and react-navigator version
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
             headerTitle: 'Đổi màu'   
        } 
    },
    Login: {
        screen: Loginpage,
        navigationOptions: {
          headerTitle: 'Đăng nhập'   
        },
      },
}, 
{
    initialRouteName: 'Main',
    navigationOptions: {
        headerStyle: {
          backgroundColor: '#225',
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
export const TabNavigatorStack= createBottomTabNavigator(
    {
        Home: {
          screen: NavigatorStack1,
          navigationOptions: {
            headerTitle: 'Trang chu',
            tabBarLabel: 'Home',
          },
        },
        Settings: {
            screen: NavigatorStack2,
            navigationOptions: {
                headerTitle: 'Thiet lap',
                tabBarLabel: 'Setting',
         } },
    },
   /* {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
              iconName = `ios-options${focused ? '' : '-outline'}`;            
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      }  */
);
export const NavigatorStack= createDrawerNavigator(
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
export default NavigatorStack
  

