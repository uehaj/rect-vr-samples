import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

export default () => {

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  sagaMiddleware.run(sagas);
  return store;
};

