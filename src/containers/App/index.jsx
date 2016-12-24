// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import loadApp from 'modules/app/actions';

// UI
import { AppLayout } from 'components';

// Constants
import ROUTES from 'constants/routes';

// PropTypes
const { func, object, node } = PropTypes;
const propTypes = {
  app: object,
  user: object,
  loadApp: func,
  children: node,
};

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const { app: { isLoaded }, user: { data, isAuthenticated }, children } = this.props;

    return (
      <AppLayout
        isLoading={!isLoaded}
        isAuthenticated={isAuthenticated}
        routes={ROUTES}
        user={data}
      >
        {children}
      </AppLayout>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
});

const mapDispatchToProps = {
  loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
