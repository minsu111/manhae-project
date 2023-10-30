import React from "react";
import ReactPlayer from "react-player";

import "./videoPlayer.scss";

export const VideoPlayer = ({ videoURL }) => {
  return (
    <div className="video_wrapper">
      <ReactPlayer
        className="react-player"
        url={videoURL}
        playing
        controls={true}
      />
    </div>
  );
};
