import React from "react";
import ReactPlayer from "react-player";

import "./videoPlayer.scss";

export const VideoPlayer = () => {
  return (
    <div className="video_wrapper">
      <ReactPlayer
        className="react-player"
        url="/video/2.8독립선언서 한글.mp4"
        playing
        controls={true}
      />
    </div>
  );
};
