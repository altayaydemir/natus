// Core
import React, { PropTypes } from 'react';

// UI
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Loader } from 'components';

// Helpers
import { humanizeBytes } from 'helpers/utils';

// PropTypes
const { object, bool } = PropTypes;
const propTypes = {
  data: object,
  isLoaded: bool,
};

const FileList = ({ data, isLoaded }) => !isLoaded ? <Loader /> : (
  <ListGroup>
    {data.files.map(file => (
      <LinkContainer key={file.id} to={`/files/${file.id}`}>
        <ListGroupItem>

          <img
            src={file.icon}
            alt="icon"
            style={{ marginRight: 14 }}
          />

          <span
            style={{ marginRight: 7, fontWeight: 600 }}
          >
            {file.name}
          </span>

          <small>
            {humanizeBytes(file.size)}
          </small>
        </ListGroupItem>
      </LinkContainer>
    ))}
  </ListGroup>
);

FileList.propTypes = propTypes;

export default FileList;
