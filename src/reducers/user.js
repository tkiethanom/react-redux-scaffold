import { LOGIN, LOGOUT } from 'constants/ActionTypes.js';

export default function user(store = null, action = {}) {
  switch (action.type) {
  case LOGIN:
    return action.payload;
  case LOGOUT:
    return null;
  default:
    return store;
  }
}

