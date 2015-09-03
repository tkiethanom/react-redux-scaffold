import { 
	REQUEST_ADD_ACCOUNT, 
	RECEIVE_ADD_ACCOUNT,
	REQUEST_ACCOUNTS,
	RECEIVE_ACCOUNTS 
} from 'actions/Accounts/AccountActions';
import _ from 'lodash';

const initialState = {	
	accountRows: [],
	isSavingAccount: false,
	isFetchingAccounts: false
};

export function AccountReducers(state = initialState, action) {	
	switch (action.type) {
		case REQUEST_ADD_ACCOUNT:
			return _.assign({}, state, {
				isSavingAccount: true
			});
		case RECEIVE_ADD_ACCOUNT:      			
			console.log(action.json);
			return _.assign({}, state, {
				accountRows: [...state.accountRows, action.json],
				isSavingAccount: false
			});
		case REQUEST_ACCOUNTS:		
			return _.assign({}, state, {
				isFetchingAccounts: true
			});
	    case RECEIVE_ACCOUNTS:	    	
			return _.assign({}, state, {
		    	accountRows: action.accountRows,
		    	isFetchingAccounts: false
		    });
		default: 
			return state;
	}
}
