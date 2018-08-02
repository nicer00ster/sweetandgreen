import React from 'react';
import { Platform, StatusBar, Animated, Easing } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Restaurants from './components/Restaurants';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AuthFlow from './components/AuthFlow';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const notAuthed = createSwitchNavigator({
  Login: {
    screen: AuthFlow,
    navigationOptions: {
      title: 'Login',
      headerStyle
    }
  },
  Register: {
    screen: AuthFlow,
    navigationOptions: {
      title: 'Register',
      headerStyle
    }
  }
}, {
  ...createTabNavigator.Presets.AndroidTopTabs,
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      flex: 1,
      width: '100%',
      height: '25%',
      padding: 25,
      position: 'absolute',
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
    },
    activeTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderRadius: 100,
      borderWidth: 2,
      borderBottomWidth: 3,
      height: 0,
      alignSelf: 'center',
      flex: 1
    },
    labelStyle: {
      fontSize: 14,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    inactiveBackgroundColor: '#000'
  }
});

export const isAuthed = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" />
    }
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: {
      tabBarLabel: 'Restaurants',
      tabBarIcon: ({ tintColor }) => <Icon name="restaurant-menu" />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="menu" />
    }
  }
}, {
  tabBarOptions: {
    style: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  }
})

export const rootNav = ( authed = false ) => {
  return createSwitchNavigator({
    notAuthed: {
      screen: notAuthed
    },
    isAuthed: {
      screen: isAuthed
    }
  }, {
    initialRouteName: authed ? "isAuthed" : "notAuthed"
  })
}
