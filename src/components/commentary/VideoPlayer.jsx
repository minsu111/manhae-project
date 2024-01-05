import React from "react";
import ReactPlayer from "react-player";

import "./videoPlayer.scss";

export const VideoPlayer = ({ videoURL, handleVideoEnd }) => {
  const pathname = window.location.pathname;

  const onError = (error) => {
    console.error("Video error:", error);
  };

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
        onError={onError}
        onEnded={handleVideoEnd}
      />
    </div>
  );
};
