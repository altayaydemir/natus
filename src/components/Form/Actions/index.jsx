// Core
import React, { PropTypes } from 'react';
import cx from 'classnames';

// UI
import { Button } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import style from './style.scss';

// PropTypes
const { string, func, node, shape, bool } = PropTypes;

const btnShape = shape({
  className: string,
  text: node,
  onClick: func,
  type: string,
  icon: string,
  busy: bool,
  size: string,
});

const propTypes = {
  submit: btnShape,
};

// DefaultProps
const defaultProps = {
  submit: {
    className: 'btn-success',
    icon: 'chevron-circle-right',
    busy: false,
    size: 'small',
  },
};

const FormActions = ({ submit }) => {
  submit = { ...defaultProps.submit, ...submit };

  const busyButton = (
    <Icon
      name="spinner"
      style={{ paddingLeft: 0 }}
      spin
    />
  );

  return (
    <div>
      {submit &&
        <Button
          name="submitButton"
          type="submit"
          className={cx(style.Submit, submit.className, 'pull-right')}
          disabled={submit.disabled}
          bsSize={submit.size}
        >
          {submit.busy ? busyButton : (
            <span>
              {submit.text}
              {submit.icon &&
                <Icon name={submit.icon} />
              }
            </span>
          )}
        </Button>
      }
    </div>
  );
};

FormActions.propTypes = propTypes;

export default FormActions;
