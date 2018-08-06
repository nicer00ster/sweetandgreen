import React from 'react';
import { Platform, StatusBar, Image, Dimensions } from 'react-native';
import { createTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Menu from './components/screens/Menu';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import Profile from './components/screens/Profile';
import Payment from './components/screens/Payment';
import OrdersFavorites from './components/screens/OrdersFavorites';
import CreditsRewards from './components/screens/CreditsRewards';
import { DrawerScreen } from './components/screens/DrawerScreen';

import PublicRouter from './components/routing/PublicRouter';
import PrivateRouter from './components/routing/PrivateRouter';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
};

const PrivateRoutes = {
  Home: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'HOME',
      drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
    }
  },
  OrdersFavorites: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'OrdersFavorites',
      drawerLabel: 'ORDERS & FAVORITES',
      drawerIcon: ({ tintColor }) => <Icon name="favorite" color={tintColor} />,
    }
  },
  CreditsRewards: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'CreditsRewards',
      drawerLabel: 'CREDITS & REWARDS',
      drawerIcon: ({ tintColor }) => <Icon name="card-giftcard" color={tintColor} />,
    }
  },
  Payment: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'Payment',
      drawerLabel: 'PAYMENT',
      drawerIcon: ({ tintColor }) => <Icon name="payment" color={tintColor} />,
    }
  },
  Menu: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'MENU',
      drawerIcon: ({ tintColor }) => <Icon name="restaurant-menu" color={tintColor} />
    }
  },
  Profile: {
    screen: PrivateRouter,
    navigationOptions: {
      title: 'Profile',
      drawerLabel: 'PROFILE',
      drawerIcon: ({ tintColor }) => <Icon name="sentiment-very-satisfied" color={tintColor} />,
    }
  },
};


export const Public = createSwitchNavigator ({
  Login: {
    screen: PublicRouter,
    navigationOptions: {
      title: 'Login',
      headerStyle
    }
  },
  Register: {
    screen: PublicRouter,
    navigationOptions: {
      title: 'Register',
      headerStyle
    }
  }
});

export const Private = createDrawerNavigator({
  ...PrivateRoutes
}, {
  contentComponent: DrawerScreen,
  contentOptions: {
    activeTintColor: '#218c74',
    inactiveTintColor: '#88dac5',
    style: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    itemsContainerStyle: {
      flex: 1
    },
    labelStyle: {
      fontWeight: '600'
    }
  },
})

export const rootNav = ( authed = false ) => {
  return createSwitchNavigator({
    Public: {
      screen: Public
    },
    Private: {
      screen: Private
    }
  }, {
    initialRouteName: authed ? "Private" : "Public"
  })
};
