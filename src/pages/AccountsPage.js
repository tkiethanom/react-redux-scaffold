import React, { Component, findDOMNode } from 'react/addons';
import { connect } from 'react-redux';

import _ from 'lodash';

import { addAccount } from '../actions/AccountActions';
import AccountList from '../components/AccountList/AccountList';


export default class AccountsPage extends Component {	
	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        			<h1>Accounts</h1>
        				<form onSubmit={e => this.handleSubmit(e)}>
        			 		<input type="text" ref="input" />
        					<input type="submit" value="Add" />
        				</form>

        			<AccountList accountRows={this.props.accountRows}/>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		//Using lodash to check if Object is empty
		if (!_.isEmpty(this.refs.input)) {
			const { dispatch } = this.props;
			const node = findDOMNode(this.refs.input);	    
		    const text = node.value.trim();		    
		    dispatch(addAccount(text));
		    node.value = '';	
		}
  	}
}

AccountsPage.propTypes = {
  	
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {	
  return {
  	accountRows: state.AccountReducers.accountRows
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AccountsPage);
