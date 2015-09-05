import _ from 'lodash';

import { 
	GET_RECENTLY_VIEWED
} from 'actions/AppActions';

const initialState = {	
	recentlyViewed: []
};

export function App(state = initialState, action) {	
	switch (action.type) {
		case GET_RECENTLY_VIEWED:
			return _.assign({}, state, {
				recentlyViewed: action.recentlyViewed
			});		
		default: 
			return state;
	}
}
