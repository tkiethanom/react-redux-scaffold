import { ADD_ACCOUNT } from '../actions/AccountActions';
import _ from 'lodash';

const initialState = {
  accountRows: [{text: 'Use Redux'}, { text: 'Learn to connect it to React'}]
};

export function AccountReducers(state = initialState, action) {	
  switch (action.type) {
  case ADD_ACCOUNT:      
    return _.assign({}, state, {
      accountRows: [...state.accountRows, { text: action.text}]
    });    
  
  default: 
    return state;
  }
}

