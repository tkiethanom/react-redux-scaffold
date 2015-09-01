import React, { Component } from 'react/addons';
import AccountList from '../components/AccountList/AccountList';

export default class AccountsPage extends Component {

	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        			<h1>Accounts</h1>
      			</ReactCSSTransitionGroup>
      			<AccountList />
			</div>
		);
	}
}


