import React, { Component } from 'react/addons';
import { connect } from 'react-redux';

import { fetchAccounts } from 'actions/Accounts/AccountActions';
import { fetchRecentlyViewed } from 'actions/AppActions';
import AccountList from 'components/Accounts/AccountList/AccountList';
import RecentlyViewedList from 'components/App/RecentlyViewed/RecentlyViewedList';

export default class HomePage extends Component {
	componentDidMount() {
    	const { dispatch } = this.props;
    	if (this.props.Account.accountRows.length === 0) {
			dispatch(fetchAccounts());
    	}

    	dispatch(fetchRecentlyViewed());
  	}

	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        			<h1>Home</h1>

        			<AccountList accountRows={this.props.Account.accountRows} isFetchingAccounts={this.props.Account.isFetchingAccounts} />
        			<RecentlyViewedList recentlyViewedRows={this.props.App.recentlyViewed} />
      			</ReactCSSTransitionGroup>
			</div>
		);
	}
}

HomePage.propTypes = {
  	
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
export default connect(select)(HomePage);
