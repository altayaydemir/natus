// Core
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { createFolder } from 'modules/files/actions';
import { hideModal } from 'modules/ui/actions';

// UI
import { FormModal, FolderForm } from 'components';

// Constants
import ICONS from 'constants/icons';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  files: object,
  createFolder: func,
  modal: object,
  hideModal: func,
};

class FolderEditor extends Component {
  onSubmit = formData => createFolder(formData)

  render() {
    const { files: { creating }, modal, hideModal } = this.props;

    return (
      <FormModal
        {...modal}
        title="Create Folder"
        onHide={() => hideModal()}
        icon={ICONS.FOLDER_EDITOR}
      >
        <FolderForm
          status={creating}
          onSubmit={this.onSubmit}
        />
      </FormModal>
    );
  }
}

FolderEditor.propTypes = propTypes;

const mapStateToProps = state => ({
  files: state.files,
  modal: state.ui.modal,
});

const mapDispatchToProps = {
  createFolder,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderEditor);
