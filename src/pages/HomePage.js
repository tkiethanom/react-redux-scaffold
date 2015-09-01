import React, { Component } from 'react/addons';

export default class HomePage extends Component {
	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        			<h1>Home</h1>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}
}


