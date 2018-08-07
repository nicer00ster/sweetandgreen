import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
import menuSaga from './sagas';
import rootReducer from './reducers';
import { isLoggedIn } from './auth';
import { rootNav } from './Router';

console.disableYellowBox = true;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(menuSaga);

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
  // renderApp() {
  //   if(this.state.loading) {
  //     return <ActivityIndicator size='large' style={{ flex: 1 }} />
  //   } else {
  //     return <Root />
  //   }
  // }
  render() {
    const { authed, authCheck } = this.state;
    const Root = rootNav(authed)
    if(!authCheck) return null;
    return (
      <Provider store={store}>
          <Root />
      </Provider>
    )
  }
}
