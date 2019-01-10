/**
 * Code Author : Avinash
 * Date : 10/01/19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducer from "./reducers/counter";

import CounterApp from './containers/counterApp';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  (<Provider store={store}>
    <CounterApp />
  </Provider>), document.getElementById('root'));
