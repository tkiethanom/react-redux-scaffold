import React, { Component } from 'react/addons';
import { connect } from 'react-redux';

import { fetchAccountView } from 'actions/Accounts/AccountActions';
import _ from 'lodash';
import { Link } from 'react-router';

require('styles/Accounts/accounts.scss');

export default class AccountsViewPage extends Component {	
	componentDidMount() {
    	const { dispatch } = this.props;
    	const data = this.props.Account.accountDetails;
    	const accountId = parseInt(this.props.params.accountId, 10);

    	if(_.isEmpty(data) || accountId !== data.id){
    		dispatch(fetchAccountView(this.props.params.accountId));	
    	}
  	}

	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
		const data = this.props.Account.accountDetails;

		let details;
		if (this.props.Account.isFetchingAccountView === false) {
			details = (<div className="accound-details">
	        				<div>Id: {data.id}</div>
	        				<div>Name: {data.name}</div>
	        				<div>Email: {data.email}</div>
	        				<div>Phone: {data.phone}</div>
	        			</div>);
		} else {
			details = <div><img src="./public/img/ajax-loader.gif" /></div>;
		}
 
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true} transitionLeave={false}>
					<div>
	        			<h1>Account</h1>
	        			<div className="pull-right" >
							<Link to="/campaigns/add">Add Campaign</Link>
	        			</div>
	        			{details}
        			</div>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}
}

AccountsViewPage.propTypes = {
  	
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {	
	return {
		Account: state.Account
	};
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AccountsViewPage);
