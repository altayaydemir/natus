// Core
import React, { PropTypes } from 'react';

// UI
import { Link } from 'react-router';
import { SectionHeader, Loader } from 'components';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';

// Helpers
import { humanizeBytes } from 'helpers/utils';

// PropTypes
const { array, bool } = PropTypes;
const propTypes = {
  data: array,
  isLoaded: bool,
};

const labelStyle = {
  display: 'inline-block',
  marginRight: 5,
  width: 75,
  fontSize: '80%',
};

const btnStyle = {
  position: 'absolute',
  right: 15,
  top: 25,
};

const TransferList = ({ data, isLoaded }) => !isLoaded ? <Loader /> : (
  <div>
    <SectionHeader title="Transfers" />

    <ListGroup>
      {data.map(item => (
        <ListGroupItem
          key={item.id}
          header={
            <div>
              <h4>
                {item.name}
              </h4>

              <Link
                to={`/files/${item.save_parent_id}`}
                className="pull-right btn btn-small btn-primary"
                style={btnStyle}
              >
                Go To File
              </Link>
            </div>}
        >
          <Label
            bsStyle="default"
            style={labelStyle}
          >
            {humanizeBytes(item.size)}
          </Label>

          <Label
            bsStyle="success"
            style={labelStyle}
          >
            %{item.percent_done}
          </Label>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

TransferList.propTypes = propTypes;

export default TransferList;
