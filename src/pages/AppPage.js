import React, { Component, PropTypes } from 'react';
import Nav from 'components/Nav/Nav.js';
import Cookie from 'react-cookie';

export default class AppPage extends Component {
	static propTypes = {
		children: PropTypes.object
	};

	componentDidMount() {
		this.updatePage();
	}

	componentDidUpdate(){
		this.updatePage();		
	}

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

	updatePage(){
		const title = 'Redux | ' + this.props.branch[1].title;
		document.title = title;

		let recents = Cookie.load('recentlyViewed');
		if(recents === undefined){
			recents = [];
		}
		recents.push({title: this.props.branch[1].title, url: this.props.location.pathName });
		
		Cookie.save('recentlyViewed', recents);
		console.log(Cookie.load('recentlyViewed'));
	}
}


