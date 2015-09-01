import React, { Component } from 'react/addons';

export default class CampaignsPage extends Component {
	render() {
		const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="fadeIn" transitionAppear={true}>
        			<h1>Campaigns</h1>
      			</ReactCSSTransitionGroup>
			</div>
		);
	}
}


