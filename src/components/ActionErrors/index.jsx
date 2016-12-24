// Core
import React, { PropTypes } from 'react';

// UI
import { Label } from 'react-bootstrap';
import style from './style.scss';

// PropTypes
const { object, bool } = PropTypes;
const propTypes = {
  data: object,
  visible: bool,
};

const defaultProps = {
  visible: true,
};

const ActionErrors = ({ data, visible }) => visible && (Object.keys(data).length > 0) && (
  <div className={style.Wrapper}>
    <Label bsStyle="danger">
      <span style={{ display: 'block', marginTop: 5, marginBottom: 5 }}>
        {data.error_message}
      </span>
    </Label>
  </div>
);

ActionErrors.propTypes = propTypes;
ActionErrors.default = defaultProps;

export default ActionErrors;
