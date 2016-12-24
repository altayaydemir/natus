// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getTransfers } from 'modules/transfers/actions';
import { showModal } from 'modules/ui/actions';

// UI
import { Link } from 'react-router';

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
    this.transferPolling = setInterval(() => this.props.getTransfers({ polling: true }), 10000);
  }

  render() {
    const { transfers: { list }, showModal } = this.props;

    return (
      <div>
        <button onClick={() => showModal('ADD_TRANSFER')}>
          Add Transfer
        </button>

        {list.isLoaded ? list.data.map(transfer => (
          <Link key={transfer.id} to={`/transfers/${transfer.id}`}>
            {transfer.id} || {transfer.name} || {transfer.percent_done}
            <br />
          </Link>
        )) : 'Loading Transfer List'}
      </div>
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
