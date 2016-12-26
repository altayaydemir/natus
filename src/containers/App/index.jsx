// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { loadApp } from 'modules/app/actions';
import { logOut } from 'modules/user/actions';
import { showModal } from 'modules/ui/actions';

// UI
import ErrorContainer from 'containers/Error';
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
  showModal: func,
  logOut: func,
  children: node,
};

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const {
      app: { isLoaded, error },
      user: { data, isAuthenticated },
      ui: { modal },
      children,
      showModal,
      logOut,
    } = this.props;

    return (
      <AppLayout
        isLoading={!isLoaded}
        isAuthenticated={isAuthenticated}
        routes={ROUTES}
        user={data}
        headerActions={{
          onAddTransfer: () => showModal('ADD_TRANSFER'),
          onLogout: () => logOut(),
        }}
      >
        {error > 0 ? <ErrorContainer /> : children}
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
  showModal,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
