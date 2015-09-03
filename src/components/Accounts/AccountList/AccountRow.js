import React, { Component, PropTypes } from 'react';

export default class AccountRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.phone}</td>
			</tr>
			);
	}
}

AccountRow.propTypes = {  
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
};
