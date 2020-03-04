<<<<<<< HEAD
import React, { Component } from 'react';

import Home from 'pages/home/views/Home'
import CateGoryPage from 'pages/categories/views/CateGoryPage'
import Play from 'pages/play/views/Play'

import { Provider } from 'react-redux'

import store from './store/'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={Home}/>
            <Route exact path='/category' component={CateGoryPage} key={ new Date().getTime() }/>
            <Route path='/play' component={Play}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
=======
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
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
