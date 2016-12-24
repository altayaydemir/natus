// Core
import React, { PropTypes } from 'react';

// UI
import InputWrapper from '../InputWrapper';
import { FormControl } from 'react-bootstrap';

// PropTypes
const { object, string, bool, func } = PropTypes;
const propTypes = {
  disabled: bool,
  input: object,
  placeholder: string,
  type: string,
  onChangeEvent: func,
};

const TextArea = (props) => {
  const { input, onChangeEvent, placeholder, disabled, type } = props;

  const onChange = (e) => {
    if (onChangeEvent) {
      onChangeEvent(e.target.value);
    }

    return input.onChange(e);
  };

  return (
    <InputWrapper {...props}>
      <FormControl
        {...props.input}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        componentClass="TextArea"
      />
    </InputWrapper>
  );
};

TextArea.propTypes = propTypes;

export default TextArea;
