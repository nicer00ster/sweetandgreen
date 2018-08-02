import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, createTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { isLoggedIn } from './auth';

import Restaurants from './components/Restaurants';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { rootNav } from './router';

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      authCheck: false
    }
  }
  componentDidMount() {
    isLoggedIn()
    .then(res => this.setState({ authed: res, authCheck: true}))
  }
  render() {
    const { authed, authCheck } = this.state;
    if(!authCheck) return null;
    const Root = rootNav(authed)
    return <Root />
  }
}
