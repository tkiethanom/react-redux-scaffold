import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Scaffold</h1>
        <ul>
          <li><Link to="/todos">TODO MVC example</Link></li>
          <li><Link to="/locked">Locked Page (require login)</Link></li>

        </ul>
      </div>
    );
  }
}


