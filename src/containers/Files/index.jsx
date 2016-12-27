// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFiles, createFolder } from 'modules/files/actions';

// UI
import { SectionHeader, FileList } from 'components';

// PropTypes
const { func, object } = PropTypes;
const propTypes = {
  files: object,
  getFiles: func,
  createFolder: func,
};

class Files extends Component {
  constructor() {
    super();

    this.state = {
      countdown: {
        started: false,
        timeLeft: 5,
      },
    };

    this.folderName = `Natus.${Date.now()}`;
  }

  componentDidMount() {
    this.props.getFiles();
  }

  componentWillReceiveProps(nextProps) {
    const { files } = nextProps;

    if (!this.props.files.list.isLoaded && files.list.isLoaded) {
      this.startFolderCreationCountdown();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startFolderCreationCountdown = () => {
    this.setState({ countdown: { ...this.state.countdown, started: true } });
    this.interval = setInterval(this.countdown, 1000);
  }

  countdown = () => {
    const { files: { list: { data } } } = this.props;
    const { countdown: { timeLeft } } = this.state;

    if (timeLeft <= 5 && timeLeft > 1) {
      this.setState({ countdown: { ...this.state.countdown, timeLeft: timeLeft - 1 } });
    }

    if (timeLeft === 1) {
      clearInterval(this.interval);
      this.setState({ countdown: { started: false, timeLeft: 5 } });
      this.props.createFolder({ name: this.folderName, parrent_id: data.parent.id });
    }
  }

  render() {
    const { files: { list, creating } } = this.props;
    const { countdown } = this.state;

    return (
      <div>
        <SectionHeader title="Your Files" />

        <p>
          {countdown.started &&
            <span>
              Creating a folder named <b>{this.folderName}</b> in <b>{countdown.timeLeft}</b>...
            </span>
          }

          {creating.isLoading &&
            <span>
              Creating <b>{this.folderName}</b> inside root folder!
            </span>
          }

        </p>

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
  createFolder,
  getFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
