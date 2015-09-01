import React, { Component } from 'react';
//import { Link } from 'react-router';

export default class AccountList extends Component {
	render() {
		return (
			<div className="account-list">
				<table className="table">
					<thead>
						<tr><th>ID</th></tr>
					</thead>
					<tbody>
						<tr><td>#</td></tr>
					</tbody>
				</table>
			</div>
		);
	}
}
