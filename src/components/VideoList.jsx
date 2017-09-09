import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

const VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video, i) => <VideoListEntry key={`video${i}`} video={video} handler={props.handler} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  handler: React.PropTypes.func.isRequired
};

export default VideoList;
