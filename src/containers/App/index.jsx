// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import loadApp from 'modules/app/actions';
import { deleteFiles } from 'modules/files/actions';

// PropTypes
const { func, object, node } = PropTypes;
const propTypes = {
  app: object,
  loadApp: func,
  children: node,
  deleteFiles: func,
};

class App extends Component {
  componentDidMount() {
    const { loadApp, deleteFiles } = this.props;
    loadApp();

    // Bind delete files action to beforeunload event
    window.onbeforeunload = () => deleteFiles();
  }

  render() {
    const { app: { isLoaded }, children } = this.props;

    return (
      <div>
        {!isLoaded ? 'loading applicaton...' : children}
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = {
  loadApp,
  deleteFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
