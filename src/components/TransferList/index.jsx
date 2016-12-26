// Core
import React, { PropTypes } from 'react';

// UI
import { Link } from 'react-router';
import { SectionHeader, Loader } from 'components';

// PropTypes
const { array, bool } = PropTypes;
const propTypes = {
  data: array,
  isLoaded: bool,
};

const TransferList = ({ data, isLoaded }) => !isLoaded ? <Loader /> : (
  <div>
    <SectionHeader title="Transfers" />

    {data.map(item => (
      <div key={item.id}>
        {item.name} || {item.percent_done} ---

        <Link to={`/files/${item.save_parent_id}`}>
          Go To File
        </Link>
        <br />
      </div>
    ))}
  </div>
);

TransferList.propTypes = propTypes;

export default TransferList;
