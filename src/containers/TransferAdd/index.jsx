// Core
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { addTransfer } from 'modules/transfers/actions';
import { getFiles } from 'modules/files/actions';

// UI
import { TransferForm } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  getFiles: func,
  files: object,
  transfers: object,
  addTransfer: func,
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
    const { files, transfers: { adding } } = this.props;

    return (
      <div>
        {files.list.isLoaded ?
          <TransferForm
            status={adding}
            onSubmit={this.onSubmit}
          /> :
          'Loading...'
        }
      </div>
    );
  }
}

TransferAdd.propTypes = propTypes;

const mapStateToProps = state => ({
  files: state.files,
  transfers: state.transfers,
});

const mapDispatchToProps = {
  getFiles,
  addTransfer,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferAdd);
