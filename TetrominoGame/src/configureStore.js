import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

export default () => {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    const acceptCallback = () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    };
    module.hot.accept('./reducers', acceptCallback);
    module.hot.acceptCallback = acceptCallback;
  }
  sagaMiddleware.run(sagas);
  return store;
};
