import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'reducers';


let finalCreateStore;

if (__DEVTOOLS__) {
  const { devTools } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    createStore
  );
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    createStore
  );
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default store;
