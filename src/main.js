import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import Routes from './Routes.js';

require('./styles/main.scss');

let finalCreateStore;

if (typeof __DEVTOOLS__ !== 'undefined') {
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

/*import { addAccount } from './actions/AccountActions';
store.dispatch(addAccount('Learn about actions'));
console.log(store.getState());*/

export default class App extends Component {
  render() {
    let devtools = null;
    if (typeof __DEVTOOLS__ !== 'undefined') {
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      devtools = (
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
      );
    }
    return (
      <div>
      	<div className="container-fluid">
	        <Provider store={store}>
	          {() => <Routes />}
	        </Provider>
        </div>
        {devtools}
      </div>
    );
  }
}

React.render(<App />, document.body);
