import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as SessionActions from 'actions/SessionActions.js';

@connect()
export default class LoginPage extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor() {
    super(...arguments);

    this.state = {
      name: null
    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <p>Enter your name to login!</p>e
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
        <button onClick={() => dispatch(SessionActions.login(this.state.name, this.context.router))}>确认</button>
      </div>
    );
  }
}

