import fetch from 'isomorphic-fetch';

export const REQUEST_ADD_ACCOUNT = 'REQUEST_ADD_ACCOUNT';
export const RECEIVE_ADD_ACCOUNT = 'RECEIVE_ADD_ACCOUNT';

export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';

function requestAddAccount() {
	return { type: REQUEST_ADD_ACCOUNT };
}

function receiveAddAccount(json) {
  	return { type: RECEIVE_ADD_ACCOUNT, json };
}

function requestAccounts() {
	return { type: REQUEST_ACCOUNTS };
}
function receiveAccounts(json) {
  	return {
	    type: RECEIVE_ACCOUNTS,
	    accountRows: json.results
  	};
}

export function fetchAccounts() {
  // thunk middleware knows how to handle functions
  return function next(dispatch) {
  	dispatch(requestAccounts());
    // Return a promise to wait for
    // (this is not required by thunk middleware, but it is convenient for us)    
    return fetch('http://localhost:9999/public/mock/accounts.json')
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        setTimeout(() => {
        	dispatch(receiveAccounts(json));
    	}, 1000)
      );
  };
}

export function saveAccount(text) {
  // thunk middleware knows how to handle functions
  return function next(dispatch) {
  	dispatch(requestAddAccount());
    // Return a promise to wait for
    // (this is not required by thunk middleware, but it is convenient for us)
    return fetch('http://localhost:9999/public/mock/accounts.json')
      .then(response => response.json())
      .then(() =>
        // We can dispatch many times!
        setTimeout(() => {
        	dispatch(receiveAddAccount({
	            'created_at': '', 
	            'email': 'test@gmail.com', 
	            'id': 99, 
	            'name': text, 
	            'phone': '+1(888)0000000'
        	}));
    	}, 1000)
      );
  };
}
