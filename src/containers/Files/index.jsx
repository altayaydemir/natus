// Core
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getFiles, createFolder } from 'modules/files/actions';

// UI
import { Link } from 'react-router';

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
    this.folderName = 'Altay';
    this.state = {
      countdown: {
        started: false,
        timeLeft: 5,
      },
    };
  }

  componentDidMount() {
    this.props.getFiles();
  }

  // componentWillReceiveProps(nextProps) {
  //   const { files } = nextProps;

  //   if (!this.props.files.list.isLoaded && files.list.isLoaded) {
  //     this.startFolderCreationCountdown();
  //   }
  // }

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
    const { countdown } = this.state;
    const { files: { list, creating } } = this.props;

    return (
      <div>
        {list.isLoaded ? list.data.files.map(file => (
          <Link key={file.id} to={`/files/${file.id}`}>
            {file.name} - {file.id}
            <br />
          </Link>
        )) : 'Loading File List'}

        <br />

        {countdown.started && `Creating a folder in ${countdown.timeLeft}...`}

        <br />

        {creating.isLoading && `Creating a folder named ${this.folderName} inside root folder!`}
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
  createFolder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
