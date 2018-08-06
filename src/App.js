import React from 'react';
import { ActivityIndicator } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


import { isLoggedIn } from './auth';
import { rootNav } from './Router';
import reducer from './reducers';

console.disableYellowBox = true;

const client = axios.create({
  baseURL: 'https://order.sweetgreen.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      authCheck: false,
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)
    isLoggedIn()
    .then(res => this.setState({ authed: res, authCheck: true}))
  }
  renderApp() {
    if(this.state.loading) {
      return <ActivityIndicator size='large' style={{ flex: 1 }} />
    } else {
      return <Root />
    }
  }
  render() {
    const { authed, authCheck } = this.state;
    if(!authCheck) return null;
    const Root = rootNav(authed)
    return (
      <Provider store={store}>
          <Root />
      </Provider>
    )
  }
}
