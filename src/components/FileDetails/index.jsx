// Core
import React, { PropTypes } from 'react';

// UI
import { Grid } from 'react-bootstrap';
import { Loader, SectionHeader, FileList, FileBreadcrumbs, VideoPlayer } from 'components';

// PropTypes
const { object, bool, shape } = PropTypes;
const propTypes = {
  data: object,
  isLoaded: bool,
  conversion: shape({
    isAvailable: bool,
    isConverting: bool,
    data: bool,
  }),
};

const FileDetails = ({ data, isLoaded }) => !isLoaded ? <Loader /> : (
  <Grid fluid>
    <SectionHeader title={data.parent.name} />

    <FileBreadcrumbs data={data.breadcrumbs} active={data.parent} />

    {data.parent.content_type === 'application/x-directory' &&
      <FileList
        data={data}
        isLoaded
      />
    }

    {(data.parent.mp4_stream_url || data.parent.stream_url) &&
      <VideoPlayer
        src={data.parent.mp4_stream_url || data.parent.stream_url}
        metadata={data.parent.video_metadata}
      />
    }

  </Grid>
);

FileDetails.propTypes = propTypes;

export default FileDetails;
