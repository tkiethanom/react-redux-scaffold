import React, { Component } from 'react';

export default class Nav extends Component {
	render() {		
		return (
			<div className="nav">
				Navigation
				<ul>
					<li className={this.props.location.pathname === '/' ? 'active' : ''}>Home</li>
				</ul>
			</div>
		);
	}
}


