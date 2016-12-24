// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import loadApp from 'modules/app/actions';

// UI
import { AppLayout, ModalRoot } from 'components';

// Constants
import ROUTES from 'constants/routes';

// PropTypes
const { func, object, node } = PropTypes;
const propTypes = {
  app: object,
  user: object,
  ui: object,
  loadApp: func,
  children: node,
};

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const {
      app: { isLoaded },
      user: { data, isAuthenticated },
      ui: { modal },
      children,
    } = this.props;

    return (
      <AppLayout
        isLoading={!isLoaded}
        isAuthenticated={isAuthenticated}
        routes={ROUTES}
        user={data}
      >
        {children}

        <ModalRoot data={modal} />
      </AppLayout>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
  ui: state.ui,
});

const mapDispatchToProps = {
  loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
