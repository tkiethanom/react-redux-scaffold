import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav.js';

export default class App extends Component {
	static propTypes = {
    	children: PropTypes.object
  	};

  render() {  	
    return (
      <div>
        <Nav {...this.props} />
        {this.props.children}
      </div>
    );
  }
}


