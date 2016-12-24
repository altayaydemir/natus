// Core
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { addTransfer } from 'modules/transfers/actions';
import { getFiles } from 'modules/files/actions';
import { hideModal } from 'modules/ui/actions';

// UI
import { FormModal, TransferForm } from 'components';

// Constants
import ICONS from 'constants/icons';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  getFiles: func,
  files: object,
  transfers: object,
  addTransfer: func,
  modal: object,
  hideModal: func,
};

class TransferAdd extends Component {
  componentDidMount() {
    this.props.getFiles();
  }

  onSubmit = (formData) => {
    const { files: { list: { data: { files } } }, addTransfer } = this.props;
    const recentFolder = files.filter(file => file.content_type === 'application/x-directory')[0];

    formData = {
      ...formData,
      save_parent_id: recentFolder.id,
    };

    return addTransfer(formData);
  }

  render() {
    const { files, transfers: { adding }, modal, hideModal } = this.props;

    return (
      <FormModal
        {...modal}
        title="Add Transfer"
        isLoaded={files.list.isLoaded}
        onHide={() => hideModal()}
        icon={ICONS.ADD_TRANSFER}
      >
        <TransferForm
          status={adding}
          onSubmit={this.onSubmit}
        />
      </FormModal>
    );
  }
}

TransferAdd.propTypes = propTypes;

const mapStateToProps = state => ({
  files: state.files,
  transfers: state.transfers,
  modal: state.ui.modal,
});

const mapDispatchToProps = {
  getFiles,
  addTransfer,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferAdd);
