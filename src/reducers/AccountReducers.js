import { ADD_ACCOUNT } from '../actions/AccountActions';

export function AccountReducers(state = [], action) {	
  switch (action.type) {
  case ADD_ACCOUNT:
    return [...state, {
      text: action.text
    }];
  
  default:
    return state;
  }
}

