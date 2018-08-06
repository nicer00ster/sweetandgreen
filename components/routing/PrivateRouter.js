import React from 'react';
import { Animated, Easing } from 'react-native';
import { Transition, createFluidNavigator } from 'react-navigation-fluid-transitions';
import { onLogin } from '../../auth';

import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import Payment from '../screens/Payment';
import OrdersFavorites from '../screens/OrdersFavorites';
import CreditsRewards from '../screens/CreditsRewards';

const transitionConfig = {
  duration: 250,
  timing: Animated.timing,
  easing: Easing.easing,
  gesturesEnabled: true
};

const Navigator = createFluidNavigator({
  Home: { screen: Home },
  Menu: { screen: Menu },
  Profile: { screen: Profile },
  OrdersFavorites: { screen: OrdersFavorites },
  CreditsRewards: { screen: CreditsRewards },
  Payment: { screen: Payment }
}, {
  navigationOptions: { transitionConfig },
});

export default class PrivateRouter extends React.Component {
  static router = Navigator.router;
  render() {
    return (
      <Navigator navigation={this.props.navigation} />
    );
  }
};
