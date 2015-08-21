/* eslint react/self-closing-comp:0 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { IndexPage, TodosPage, LockedPage, LoginPage } from './pages';
import { seq } from './libs/utils.js';
import { requireLogin, fetchData } from './libs/middlewares.js';

export default class Tashuo extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/todos" component={TodosPage}></Route>
        <Route path="/locked" component={LockedPage} onEnter={seq(requireLogin, fetchData)}></Route>
        <Route path="/login" component={LoginPage}></Route>
      </Router>
    );
  }
}
