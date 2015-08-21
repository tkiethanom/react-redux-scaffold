import { LOGIN, LOGOUT } from 'constants/ActionTypes.js';

export function login(name, router) {
  router.transitionTo('/locked');
  return {
    type: LOGIN,
    payload: name
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
