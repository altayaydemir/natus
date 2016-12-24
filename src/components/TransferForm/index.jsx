// Core
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

// UI
import { ActionErrors, Input, Checkbox, FormActions } from 'components';

// Helpers
import validators from 'helpers/validators';

// PropTypes
const { object, func, bool } = PropTypes;
const propTypes = {
  status: object,
  handleSubmit: func,
  pristine: bool,
  submitSucceeded: bool,
};

const TransferForm = ({ handleSubmit, status, pristine, submitSucceeded }) => (
  <form onSubmit={handleSubmit}>
    <ActionErrors visible={submitSucceeded} data={status.error} />

    <Field
      name="url"
      component={Input}
      label="URL"
      required
      validate={[validators.required]}
    />

    <Field
      inline
      name="extract"
      component={Checkbox}
      text="Extract"
    />

    <FormActions
      submit={{
        busy: status.isLoading,
        disabled: pristine,
        text: 'Submit',
      }}
    />
  </form>
);

TransferForm.propTypes = propTypes;

export default reduxForm({
  form: 'Transfer Add',
})(TransferForm);
