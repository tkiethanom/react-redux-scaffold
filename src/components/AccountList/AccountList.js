import React, { Component, PropTypes } from 'react';
import AccountRow from './AccountRow';

export default class AccountList extends Component {
	render() {
		return (
			<table className="table">
				<thead>
				<tr><th>ID</th></tr>
				</thead>
				<tbody>
					{this.props.accountRows.map((accountRow, index) =>
						<AccountRow {...accountRow} key={index} />
					)}
				</tbody>
			</table>
			);
	}
}

AccountList.propTypes = {	
	accountRows: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired).isRequired
};
