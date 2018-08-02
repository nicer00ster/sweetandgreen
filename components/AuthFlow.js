import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Transition, createFluidNavigator } from 'react-navigation-fluid-transitions';
import { onLogin } from '../auth';

import Login from './Login';
import Register from './Register';

const Navigator = createFluidNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
}, {
  navigationOptions: { gesturesEnabled: true },
});

class AuthFlow extends React.Component {
  static router = Navigator.router;
  render() {
    return (
      <Navigator navigation={this.props.navigation} />
    );
  }
}

export default AuthFlow;
