// Core
import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  size: PropTypes.string,
};

const Loader = props => (
  <div>
    Loader {props.size}
  </div>
);

Loader.propTypes = propTypes;

export default Loader;
