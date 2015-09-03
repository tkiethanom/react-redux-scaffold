import React, { Component } from 'react/addons';
import { connect } from 'react-redux';

import { Link } from 'react-router';

require('styles/Accounts/accounts.scss');

export default class AccountsAddPage extends Component {	
	componentDidMount() {
    	
  	}

	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;		

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true} transitionLeave={false}>
					<div>
	        			<h1>Add Account</h1>
        			</div>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}
}

AccountsAddPage.propTypes = {
  	
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {	
  return {
  	AccountReducers: state.AccountReducers
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AccountsAddPage);
