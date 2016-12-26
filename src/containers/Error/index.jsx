// Core
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { clearError } from 'modules/app/actions';
import { push } from 'react-router-redux';

// UI
import { ErrorServer, ErrorNotFound } from 'components';

// PropTypes
const { object, any, func } = PropTypes;
const propTypes = {
  error: any,
  clearError: func,
  push: func,
  routing: object,
};

class ErrorContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { routing: { locationBeforeTransitions: { pathname } } } = nextProps;
    const { routing, clearError } = this.props;

    if (pathname !== routing.locationBeforeTransitions.pathname) {
      clearError();
    }
  }

  goToHome = () => {
    const { push, clearError } = this.props;
    clearError();
    push('/');
  }

  render() {
    const { error } = this.props;
    let component;

    switch (error) {
      case 404:
        component = <ErrorNotFound goToHome={this.goToHome} />;
        break;

      case 500:
        component = <ErrorServer goToHome={this.goToHome} />;
        break;

      default:
        component = <ErrorNotFound goToHome={this.goToHome} />;
        break;
    }

    return (
      <div>
        {component}
      </div>
    );
  }
}

ErrorContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  error: state.app.error,
  routing: state.routing,
});

const mapDispatchToProps = {
  clearError,
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);
