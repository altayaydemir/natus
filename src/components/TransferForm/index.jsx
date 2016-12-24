// Core
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

// UI
import { Input, Checkbox, FormActions } from 'components';

// PropTypes
const { object, func, bool } = PropTypes;
const propTypes = {
  status: object,
  handleSubmit: func,
  pristine: bool,
};

const TransferForm = ({ handleSubmit, status, pristine }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="url"
      component={Input}
      label="URL"
      // validate={[validators.number]}
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
