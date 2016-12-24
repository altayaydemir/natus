// Core
import React, { PropTypes } from 'react';

// Constants
import modals from 'constants/modals';

const propTypes = {
  data: PropTypes.object,
};

const ModalRoot = ({ data }) => {
  if (!data.visible) {
    return null;
  }

  const ModalComponent = modals[data.name];

  return <ModalComponent {...data.props} />;
};

ModalRoot.propTypes = propTypes;

export default ModalRoot;
