import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<ul>
					<li className={this.props.location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={this.props.location.pathname === '/page' ? 'active' : ''}><Link to="/page">Page</Link></li>
          <li className={this.props.location.pathname === '/todos' ? 'active' : ''}><Link to="/todos">Todos</Link></li>
				</ul>
			</div>
		);
	}
}
