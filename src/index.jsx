// Core
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// History & Store Settings
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store';

// Root Container
import Root from 'containers/Root';

// Helpers
import ApiClient from 'helpers/api';

// Initialization
const store = configureStore(browserHistory, {}, new ApiClient());
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('containers/Root', () => {
    const RootContainer = require('containers/Root').default;

    render(
      <AppContainer>
        <RootContainer
          store={store}
          history={history}
        />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
