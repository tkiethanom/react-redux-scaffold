import React, { Component, PropTypes } from 'react';
import Nav from 'components/Nav/Nav.js';

export default class AppPage extends Component {
	static propTypes = {
    	children: PropTypes.object
  	};

  render() {
    return (
      <div>
        <Nav {...this.props} />
        <div className="container">
        	{this.props.children}
        </div>
      </div>
    );
  }
}


