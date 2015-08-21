import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes.js';
import store from './libs/store.js';

export default class App extends Component {
  render() {
    let devtools = null;
    if (__DEVTOOLS__) {
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
        <Provider store={store}>
          {() => <Routes />}
        </Provider>
        {devtools}
      </div>
    );
  }
}

React.render(<App />, document.body);
