import React from 'react';
import { View, StyleSheet, Text, Image, Animated, Easing } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Transition, createFluidNavigator } from 'react-navigation-fluid-transitions';
import { onLogin } from '../auth';

import Login from './Login';
import Register from './Register';

const transitionConfig = {
  duration: 250,
  timing: Animated.timing,
  easing: Easing.easing,
  gesturesEnabled: true
};

const Navigator = createFluidNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
}, {
  navigationOptions: { transitionConfig },
});

class AuthRouter extends React.Component {
  static router = Navigator.router;
  render() {
    return (
      <Navigator navigation={this.props.navigation} />
    );
  }
}

export default AuthRouter;
