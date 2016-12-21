// Core
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { push } from 'react-router-redux';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  user: object,
  push: func,
};

const requireAuth = (ComposedComponent) => {
  class AuthWrapper extends Component {
    componentWillMount() {
      this.checkAuth(this.props.user);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user);
    }

    checkAuth = (state) => {
      if (!state.isAuthenticated) {
        this.props.push('/auth');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  AuthWrapper.propTypes = propTypes;

  const mapStateToProps = state => ({
    user: state.user,
  });

  const mapDispatchToProps = {
    push,
  };

  return connect(mapStateToProps, mapDispatchToProps)(AuthWrapper);
};

export default requireAuth;
