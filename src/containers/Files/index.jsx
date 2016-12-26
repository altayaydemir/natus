// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFiles } from 'modules/files/actions';

// UI
import { SectionHeader, FileList } from 'components';

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
        <SectionHeader title="Your Files" />

        <FileList
          data={list.data}
          isLoaded={list.isLoaded}
        />
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
