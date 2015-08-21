import store from './store.js';

export function requireLogin(nextState, transition) {
  const user = store.getState().user;
  if (!user) {
    transition.to('/login');
    return false;
  }
  return true;
}

export function fetchData(nextState, transition) {
  console.log(2, transition);
  return true;
}
