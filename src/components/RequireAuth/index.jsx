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
  location: object,
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
      const { push } = this.props;

      if (!state.isAuthenticated) {
        localStorage.setItem('nextRoute', location.pathname);
        push('/auth');
      }
    }

    render() {
      const { user: { isAuthenticated } } = this.props;

      return (
        isAuthenticated ? <ComposedComponent {...this.props} /> : null
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
