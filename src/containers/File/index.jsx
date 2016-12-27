// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFile } from 'modules/files/actions';
import { push } from 'react-router-redux';

// UI
import { FileDetails } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  files: object,
  getFile: func,
  params: object,
  push: func,
};

class File extends Component {
  componentDidMount() {
    const { params: { id }, getFile } = this.props;
    getFile(id, { stream_url: true });
  }

  componentWillReceiveProps(nextProps) {
    const { files: { active: { data, isLoaded } }, params: { id } } = nextProps;

    // Update Content in Case of Route Change
    if (this.props.params.id !== id) {
      this.props.getFile(id);
    }

    // Check File Type for Challange instructions
    if (this.props.params.id === id && isLoaded) {
      if (data.parent.content_type === 'application/x-directory') {
        this.identifyBiggestFile(data);
      } else if (data.parent.file_type === 'VIDEO') {
        this.checkFileType(data.parent);
      }
    }
  }

  identifyBiggestFile = (data) => {
    const biggestVideoFile = data.files
      .filter(item => item.file_type === 'VIDEO')
      .sort((a, b) => b.size - a.size)[0];

    if (biggestVideoFile) {
      console.log(`Playing biggest video file, ${biggestVideoFile.id}`);
      return this.props.push(`/files/${biggestVideoFile.id}`);
    }

    return console.log(`${this.props.params.id} doesnt contain any video file`);
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
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(File);
