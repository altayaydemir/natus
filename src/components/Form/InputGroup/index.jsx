// Core
import React, { PropTypes } from 'react';

// UI
import InputWrapper from '../InputWrapper';
import { InputGroup as BsInputGroup, FormControl } from 'react-bootstrap';

// PropTypes
const { object, string, bool, func } = PropTypes;
const propTypes = {
  disabled: bool,
  input: object,
  placeholder: string,
  type: string,
  onChangeEvent: func,
  readonly: bool,
  groupElement: object,
};

const defaultProps = {
  groupElement: {
    left: '',
    right: '',
  },
};

const InputGroup = (props) => {
  const { input, onChangeEvent, placeholder, disabled, readonly, type, groupElement } = props;

  const onChange = (e) => {
    if (onChangeEvent) {
      onChangeEvent(e.target.value);
    }

    return input.onChange(e);
  };

  return (
    <InputWrapper {...props}>
      <BsInputGroup>
        {groupElement.left}
        <FormControl
          {...props.input}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
        {groupElement.right}
      </BsInputGroup>
    </InputWrapper>
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;
InputGroup.Button = BsInputGroup.Button;

export default InputGroup;
