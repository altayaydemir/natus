// Core
import React, { PropTypes } from 'react';

// UI
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Icon } from 'components';
import './style.scss';

// PropTypes
const { object, string, node, bool } = PropTypes;
const propTypes = {
  children: node,
  input: object,
  meta: object,
  name: string,
  placeholder: string,
  type: string,
  label: string,
  helper: node,
  groupSize: string,
  inline: bool,
  required: bool,
};

const defaultProps = {
  // groupSize: 'small',
  inline: false,
  required: false,
  meta: {},
};

const InputWrapper = (props) => {
  const {
    meta,
    name,
    label,
    helper,
    groupSize,
    children,
    inline,
    required,
  } = props;

  let validationState = null;

  if (meta.touched && meta.error) {
    validationState = 'error';
  } else if ((meta.touched || meta.dirty) && !meta.error) {
    validationState = 'success';
  }

  return (
    <div style={{ display: inline ? 'inline-block' : 'block' }}>
      <FormGroup
        controlId={name}
        validationState={validationState}
        bsSize={groupSize}
      >
        {label &&
          <ControlLabel>
            {label}{required && '*'}
          </ControlLabel>
        }

        {children}

        {validationState === 'error' &&
          <HelpBlock>
            <span>
              <Icon name="times-circle" />
              {meta.error}
            </span>
          </HelpBlock>
        }

        {(validationState !== 'error' && helper) &&
          <HelpBlock>
            <span>
              {helper}
            </span>
          </HelpBlock>
        }
      </FormGroup>
    </div>
  );
};

InputWrapper.propTypes = propTypes;
InputWrapper.defaultProps = defaultProps;

export default InputWrapper;
