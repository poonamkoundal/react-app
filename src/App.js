/*
 * @file: App.js
 * @description: App Configration
 * @author: Jasdeep Singh
 * */

import '@shopify/polaris/styles.css';
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './config';
import Routers from './routers';
import { AppProvider } from '@shopify/polaris';
export const history = createBrowserHistory();
/************ store configration *********/
const { store } = configureStore(history);

const App = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <Routers />
      </Provider>
    </AppProvider>
  );
};

export default App;
