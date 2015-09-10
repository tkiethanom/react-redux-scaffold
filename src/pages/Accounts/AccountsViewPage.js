import React, { Component } from 'react/addons';

import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import { fetchAccountView } from 'actions/Accounts/AccountActions';
import { updateDocTitle, pageVisit } from 'actions/AppActions';

require('styles/Accounts/accounts.scss');

export default class AccountsViewPage extends Component {	
	componentWillMount() {
		this.fetchAccountDetails(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.accountId !== this.props.params.accountId) {
			this.fetchAccountDetails(nextProps);
		}
	}

	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
		const data = this.props.Account.accountDetails;

		let details;
		let subtitle;
		if (this.props.Account.isFetchingAccountView === false) {
			details = (
				<div className="accound-details">
    				<div>Id: {data.id}</div>
    				<div>Name: {data.name}</div>
    				<div>Email: {data.email}</div>
    				<div>Phone: {data.phone}</div>
    			</div>
			);
			subtitle = (<span> - {data.name}</span>);
		} else {
			details = <div><img src="./public/img/ajax-loader.gif" /></div>;
			subtitle = (<span>View</span>);
		}
 
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true} transitionLeave={false}>
					<div>
	        			<h1>Account {subtitle}</h1>
	        			<div className="pull-right" >
							<Link to="/campaigns/add">Add Campaign</Link>
	        			</div>
	        			{details}
        			</div>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}

	fetchAccountDetails(props){
		const { dispatch } = props;
		const data = props.Account.accountDetails;
		const accountId = parseInt(props.params.accountId, 10);

		updateDocTitle('Account View');

		dispatch(fetchAccountView(accountId)).then(() => {
			pageVisit('Account - ' + this.props.Account.accountDetails.name, this);
		});
	}
}

AccountsViewPage.propTypes = {
  	
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	return {
		Account: state.Account,
		App: state.App
	};
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AccountsViewPage);
