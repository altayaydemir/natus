// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getTransfers } from 'modules/transfers/actions';
import { showModal } from 'modules/ui/actions';

// UI
import { TransferList } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  transfers: object,
  getTransfers: func,
  showModal: func,
};

class Transfers extends Component {
  componentDidMount() {
    this.props.getTransfers();
  }

  componentWillReceiveProps(nextProps) {
    const { transfers } = nextProps;

    if (!this.props.transfers.list.isLoaded && transfers.list.isLoaded) {
      this.startTransferPolling();
    }
  }

  componentWillUnmount() {
    clearInterval(this.transferPolling);
  }

  startTransferPolling = () => {
    this.transferPolling = setInterval(() => {
      const { transfers: { list: { data } }, getTransfers } = this.props;
      const unFinishedTransfers = data.filter(transfer => transfer.status !== 'COMPLETED');

      if (unFinishedTransfers.length > 0) {
        return getTransfers({ polling: true });
      }

      return false;
    }, 5000);
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
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
