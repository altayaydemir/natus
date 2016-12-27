// Core
import React, { Component, PropTypes } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// PropTypes
const { string } = PropTypes;
const propTypes = {
  src: string,
};

class VideoPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.video);
    this.player.play();
  }

  componentWillUnmount() {
    this.player.dispose();
  }

  render() {
    const { src } = this.props;

    return (
      <div>
        <video
          ref={node => this.video = node}
          className="video-js"
          controls
          preload="auto"
          src={src}
          data-setup='{"fluid": true}'
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = propTypes;

export default VideoPlayer;
