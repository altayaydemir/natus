// Core
import React, { PropTypes, Component } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

App.propTypes = propTypes;

export default App;
