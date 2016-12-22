// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFile } from 'modules/files/actions';

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

  render() {
    const { files: { active } } = this.props;

    return (
      <div>
        {active.isLoaded &&
          `File ${active.data.parent.name} (${active.data.parent.id}) is Loaded`
        }
      </div>
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
