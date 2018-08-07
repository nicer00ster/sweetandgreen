import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import menuSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(menuSaga)
  return store;
};

export default configureStore;
