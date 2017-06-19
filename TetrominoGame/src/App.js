import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import KeyHandler from './components/KeyHandler';
import appReducer from './reducers';
import * as Keys from './Keys';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const App = () =>
  <Provider store={store}>
    <KeyHandler captureKeys={[...Keys.ALL]}>
      <Pano source={asset('13905712293_4910bb2e3b_o.jpg')} />
      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{ translate: [0, 0, -3] }],
        }}>
        hello2
      </Text>
    </KeyHandler>
  </Provider>;

export default App;
