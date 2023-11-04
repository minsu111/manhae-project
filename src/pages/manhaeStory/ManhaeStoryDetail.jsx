import React from "react";
import { useParams } from "react-router-dom";

import ManhaeStoryList from "../../data/ManhaeStory";

import "./manhaeStoryDetail.scss";

export const ManhaeStoryDetail = () => {
  const { id } = useParams();

  return (
    <div className="story_detail_section">
      <img
        className="top_img"
        src={"/assets/image/manhaeStoryObject.png"}
        alt={"만해"}
      />
      <h1>{ManhaeStoryList[id].title}</h1>
      <div className="animation_content">애니메이션 콘텐츠 들어갈 자리</div>
      <div className="text_content">
        <p>{ManhaeStoryList[id].text}</p>
        <p>{ManhaeStoryList[id].source}</p>
      </div>
    </div>
  );
};
