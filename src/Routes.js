/* eslint react/self-closing-comp:0 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { AppPage, FirstPage, TodosPage } from './pages';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
      	<Route path="/" component={AppPage}>
      		<Route path="/page" component={FirstPage}></Route>
        	<Route path="/todos" component={TodosPage}></Route>
      	</Route>
      </Router>
    );
  }
}
