// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getTransfers, clearAddedTransfers } from 'modules/transfers/actions';
import { showModal } from 'modules/ui/actions';
import { push } from 'react-router-redux';

// UI
import { TransferList } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  transfers: object,
  getTransfers: func,
  clearAddedTransfers: func,
  showModal: func,
  push: func,
};

class Transfers extends Component {
  constructor() {
    super();
    this.state = {
      pollingStarted: false,
    };
  }

  componentDidMount() {
    this.props.getTransfers();
  }

  componentWillReceiveProps(nextProps) {
    const { transfers: { list } } = nextProps;

    if (!this.props.transfers.list.isLoaded && list.isLoaded && !this.state.pollingStarted) {
      this.setState({ pollingStarted: true });
      this.interval = setInterval(this.transferPolling, 3000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  transferPolling = () => {
    const {
      transfers: { list: { data }, adding },
      push,
      getTransfers,
      clearAddedTransfers,
    } = this.props;

    const unFinishedTransfers = data.filter(transfer => transfer.status !== 'COMPLETED');
    const latestTransfer = data[data.length - 1];

    // Polling
    if (unFinishedTransfers.length > 0) {
      getTransfers({ polling: true });
    }

    // Redirect user to parrent file page
    if (latestTransfer.id === adding.data.id && latestTransfer.status === 'COMPLETED') {
      clearAddedTransfers();
      push(`/files/${latestTransfer.save_parent_id}`);
    }
  }

  render() {
    return (
      <TransferList {...this.props.transfers.list} />
    );
  }
}

Transfers.propTypes = propTypes;

const mapStateToProps = state => ({
  transfers: state.transfers,
});

const mapDispatchToProps = {
  getTransfers,
  clearAddedTransfers,
  showModal,
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
