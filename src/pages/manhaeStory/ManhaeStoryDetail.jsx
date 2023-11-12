import React from "react";
import { useParams } from "react-router-dom";

import ManhaeStoryList from "../../data/ManhaeStory";

import "./manhaeStoryDetail.scss";
import { VideoPlayer } from "../../components/commentary/VideoPlayer";
import ReactPlayer from "react-player";

export const ManhaeStoryDetail = () => {
  const { id } = useParams();

  // 다국어 처리
  const language = sessionStorage.getItem("language");
  const title = "title" + language;
  const text = "text" + language;
  const videoURL = "video" + language;

  return (
    <div className="story_detail_section">
      <img
        className="top_img"
        src={"/assets/image/manhaeStoryObject.png"}
        alt={"만해"}
      />
      <h1>{ManhaeStoryList[id][title]}</h1>
      <div className="animation_content">
        {/* <VideoPlayer videoURL={ManhaeStoryList[id].videoKo} /> */}
        <ReactPlayer
          url={`/video/manhaeStory/${ManhaeStoryList[id][videoURL]}`}
          playing
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="text_content">
        <p>{ManhaeStoryList[id][text]}</p>
        <p>{ManhaeStoryList[id].source}</p>
      </div>
    </div>
  );
};
