// Core
import React, { PropTypes } from 'react';

// UI
import { Checkbox } from 'react-bootstrap';
import InputWrapper from '../InputWrapper';
import style from './style.scss';

// PropTypes
const { object, string, bool } = PropTypes;
const propTypes = {
  input: object,
  placeholder: string,
  type: string,
  label: string,
  text: string,
  inline: bool,
};

const Input = props => (
  <InputWrapper {...props}>
    <div className={style.Wrapper} style={{ marginRight: props.inline ? 25 : 0 }}>
      <Checkbox
        inline={props.inline}
        checked={props.input.value}
        onChange={() => props.input.onChange(!props.input.value)}
        validationState={null}
      >
        <span className={style.Text}>
          {props.text}
        </span>
      </Checkbox>
    </div>
  </InputWrapper>
);

Input.propTypes = propTypes;

export default Input;
