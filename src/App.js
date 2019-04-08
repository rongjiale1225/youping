import React, { Component } from 'react';

import Home from 'pages/home/views/Home'

import store from './store/'

import { Provider } from 'react-redux'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Home></Home>
      </Provider>
    )
  }
}