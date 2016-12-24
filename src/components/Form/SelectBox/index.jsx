// Core
import React, { PropTypes } from 'react';

// UI
import InputWrapper from '../InputWrapper';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import style from './style.scss';

// Helpers
import cx from 'classnames';

// PropTypes
const { object, string, array, func, bool } = PropTypes;
const propTypes = {
  input: object,
  placeholder: string,
  type: string,
  options: array,
  meta: object,
  onChangeEvent: func,
  isLoading: bool,
  disabled: bool,
  clearable: bool,
};

const defaultProps = {
  clearable: false,
};

const Select = (props) => {
  const {
    type, placeholder, options, input, onChangeEvent, isLoading, disabled, clearable,
    meta: { touched, dirty, error },
  } = props;

  const onChange = (e) => {
    const value = e ? e.value : '';

    if (onChangeEvent) {
      onChangeEvent(value);
    }

    return input.onChange(value);
  };

  return (
    <InputWrapper {...props}>
      <div
        className={cx(style.Wrapper, {
          success: (touched || dirty) && !error,
          error: touched && error,
        })}
      >
        <ReactSelect
          {...input}
          isLoading={isLoading}
          disabled={disabled || isLoading}
          type={type}
          placeholder={placeholder}
          options={options}
          onChange={onChange}
          clearable={clearable}
          onBlur={e => e}
        />
      </div>
    </InputWrapper>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
