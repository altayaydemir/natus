// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import loadApp from 'modules/app/actions';

// PropTypes
const { func, object, node } = PropTypes;
const propTypes = {
  app: object,
  loadApp: func,
  children: node,
};

class App extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const { app: { isLoaded }, children } = this.props;

    return (
      <div>
        {!isLoaded ? 'loading...' : children}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
