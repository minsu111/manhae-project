import React from "react";
import ReactPlayer from "react-player";

import "./videoPlayer.scss";

export const VideoPlayer = ({ videoURL }) => {
  const pathname = window.location.pathname;

  const shouldAddNoBoxShadowClass = pathname.includes("/manhaeStory");

  const wrapperClassName = `video_wrapper ${
    shouldAddNoBoxShadowClass ? "no-box-shadow" : ""
  }`;
  return (
    <div className={wrapperClassName}>
      <ReactPlayer
        className="react-player"
        url={videoURL}
        playing
        controls={true}
        width="50vw"
        height="50%"
      />
    </div>
  );
};
