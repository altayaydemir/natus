// Core
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

// PropTypes
const { object, func, bool } = PropTypes;
const propTypes = {
  status: object,
  handleSubmit: func,
  pristine: bool,
};

const TransferForm = ({ handleSubmit, status, pristine }) => (
  <form onSubmit={handleSubmit}>
    <Field name="url" component="input" type="text" placeholder="URL" />
    <Field name="extract" id="extract" component="input" type="checkbox" /> Extract
    <button type="submit" disabled={pristine || status.isLoading}>
      Submit
    </button>
  </form>
);

TransferForm.propTypes = propTypes;

export default reduxForm({
  form: 'Transfer Add',
})(TransferForm);
