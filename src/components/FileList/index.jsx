// Core
import React, { PropTypes } from 'react';

// UI
import { Link } from 'react-router';

// PropTypes
const { object, bool } = PropTypes;
const propTypes = {
  data: object,
  isLoaded: bool,
};

const FileList = ({ data, isLoaded }) => (
  <div>
    {!isLoaded ?
      <div>Loading</div> :
      data.files.map(file => (
        <Link key={file.id} to={`/files/${file.id}`}>
          {file.name} - {file.id}
          <br />
        </Link>
      ))
    }
  </div>
);

FileList.propTypes = propTypes;

export default FileList;
