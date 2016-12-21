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

const requireUnAuth = (ComposedComponent) => {
  class UnAuthWrapper extends Component {
    componentWillMount() {
      this.checkUnAuth(this.props.user);
    }

    componentWillReceiveProps(nextProps) {
      this.checkUnAuth(nextProps.user);
    }

    checkUnAuth = (state) => {
      if (state.isAuthenticated) {
        this.props.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  UnAuthWrapper.propTypes = propTypes;

  const mapStateToProps = state => ({
    user: state.user,
  });

  const mapDispatchToProps = {
    push,
  };

  return connect(mapStateToProps, mapDispatchToProps)(UnAuthWrapper);
};

export default requireUnAuth;
