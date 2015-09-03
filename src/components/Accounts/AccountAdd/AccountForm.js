import React, { Component, PropTypes, findDOMNode } from 'react';
import _ from 'lodash';

export default class AccountForm extends Component {
	render() {
		return (
			<form onSubmit={e => this.handleSubmit(e)}>
		 		<input type="text" ref="input" />
				<input type="submit" value="Add" />
				{(this.props.isSavingAccount) ? <img src="./public/img/ajax-loader.gif" /> : ''}				
			</form>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		//Using lodash to check if Object is empty
		if (!_.isEmpty(this.refs.input)) {
			const node = findDOMNode(this.refs.input);
		    const data = {text: node.value.trim()};		    
		    this.props.onAddClick(data);
		    node.value = '';	
		}
  	}
}

AccountForm.propTypes = {	
	onAddClick: PropTypes.func.isRequired,
	isSavingAccount: PropTypes.bool.isRequired
};
