// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFiles } from 'modules/files/actions';

// UI
import { Link } from 'react-router';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  files: object,
  getFiles: func,
};

class Files extends Component {
  componentDidMount() {
    this.props.getFiles();
  }

  render() {
    const { files: { list } } = this.props;

    return (
      <div>
        {list.isLoaded ? list.data.files.map(file => (
          <Link key={file.id} to={`/files/${file.id}`}>
            {file.name} - {file.id}
            <br />
          </Link>
        )) : 'Loading File List'}
      </div>
    );
  }
}

Files.propTypes = propTypes;

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = {
  getFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
