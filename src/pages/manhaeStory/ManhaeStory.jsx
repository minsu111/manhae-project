import React from "react";
import ManhaeStoryList from "../../data/ManhaeStory";
import { useNavigate } from "react-router-dom";

import "./manhaeStory.scss";

export const ManhaeStory = () => {
  const navigate = useNavigate();

  // 다국어 처리
  const language = sessionStorage.getItem("language");
  const title = "title" + language;

  return (
    <div className="manhae_story_wrapper">
      <img
        className="top_img"
        src={"/assets/image/manhaeStoryObject.png"}
        alt={"만해"}
      />
      <div className="title_section">
        <h1>만해 한용운 말꽃 모음</h1>
        <p>말꽃을 터치하시면 자세히 볼 수 있습니다.</p>
      </div>
      <div className="story_title_section">
        {ManhaeStoryList.map((c, i) => (
          <div
            className="story_item"
            onClick={() => {
              navigate(`/manhaeStory/detail/${i}`);
            }}
          >
            <img
              key={i}
              src={"/assets/image/manhaeStoryBg.png"}
              alt={"만해이야기"}
            />
            <p className={language === "Ko" ? "" : "story_title_en"}>
              {c[title]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
