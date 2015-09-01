/* eslint react/self-closing-comp:0 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { AppPage, HomePage, AccountsPage, CampaignsPage } from './pages';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
      	<Route component={AppPage}>
      		<Route path="/" component={HomePage}></Route>
      		<Route path="/accounts" component={AccountsPage}></Route>
        	<Route path="/campaigns" component={CampaignsPage}></Route>
      	</Route>
      </Router>
    );
  }
}
