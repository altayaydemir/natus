// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFile } from 'modules/files/actions';

// UI
import { FileDetails } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  files: object,
  getFile: func,
  params: object,
};

class File extends Component {
  componentDidMount() {
    const { params: { id }, getFile } = this.props;
    getFile(id, { stream_url: true });
  }

  componentWillReceiveProps(nextProps) {
    const { files: { active: { isLoaded, data } }, params: { id } } = nextProps;

    // Update Content in Case of Route Change
    if (this.props.params.id !== id) {
      this.props.getFile(id);
    }

    if (!this.props.files.active.isLoaded && isLoaded) {
      this.checkFileType(data.parent);
    }
  }

  checkFileType = (file) => {
    console.log(file);
  }

  render() {
    const { files: { active: { isLoaded, data } } } = this.props;

    return (
      <FileDetails
        data={data}
        isLoaded={isLoaded}
      />
    );
  }
}

File.propTypes = propTypes;

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = {
  getFile,
};

export default connect(mapStateToProps, mapDispatchToProps)(File);
