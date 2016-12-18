/* eslint-disable react/prefer-stateless-function */
// React
import React, { Component, PropTypes } from 'react';

// Redux
import { Provider } from 'react-redux';

// ReduxToastr
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.css';

// Router
import { applyRouterMiddleware, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import getRoutes from 'routes';

// PropTypes
const { object } = PropTypes;
const propTypes = {
  store: object,
  history: object,
};

class Root extends Component {
  render() {
    const { store, history } = this.props;

    /**
     * This is emberassing but React router logs an error because
     * React Hot Loader v3 not work as expected with it.
     *
     * In order to make that error disappear, we need to assign a
     * new key to Router component on each reload.
     *
     * For details, please refer to issue below.
     * https://github.com/gaearon/react-hot-loader/issues/249
     */
    let ROUTER_KEY = 0;

    if (process.env.NODE_ENV === 'development') {
      ROUTER_KEY = Math.random();
    }

    return (
      <Provider store={store}>
        <div>
          <Router
            render={applyRouterMiddleware(useScroll())}
            routes={getRoutes(store)}
            history={history}
            key={ROUTER_KEY}
          />

          <ReduxToastr
            preventDuplicates
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = propTypes;

export default Root;
/* eslint-enable react/prefer-stateless-function */
