import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import bitCoinReducer from './src/store/reducers/bitCoinReducer';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from './src/screens/startScreen/startScreen';
import WalletScreen from './src/screens/walletScreen/walletScreen';
import HistoryScreen from './src/screens/historyScreen/historyScreen';

const store = createStore(
  bitCoinReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  const [localAddress, setLocalAddress] = useState(undefined);

  let nav;

  if (localAddress) {
    nav = {
      Wallet: WalletScreen,
      Start: StartScreen,
      History: HistoryScreen,
    };
  } else {
    nav = {
      Start: StartScreen,
      Wallet: WalletScreen,
      History: HistoryScreen,
    };
  }

  const BitCointStackNavigator = createStackNavigator(nav);

  const BitCointNavigator = createAppContainer(BitCointStackNavigator);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('localAddress');
        setLocalAddress(JSON.parse(value));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <BitCointNavigator />
    </Provider>
  );
};

export default App;
