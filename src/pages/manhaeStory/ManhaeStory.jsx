import React from "react";
import ManhaeStoryList from "../../data/ManhaeStory";
import { useNavigate } from "react-router-dom";

import "./manhaeStory.scss";

export const ManhaeStory = () => {
  const navigate = useNavigate();

  return (
    <div className="manhae_story_wrapper">
      <div className="title_section">
        <h1>만해 한용운 말꽃 모음</h1>
        <p>말꽃을 터치하시면 자세히 볼 수 있습니다.</p>
      </div>
      <div className="story_title_section">
        {ManhaeStoryList.map((c, i) => (
          <div
            key={i}
            className="story_item"
            onClick={() => {
              navigate(`/manhaeStory/detail/${i}`);
            }}
            style={{
              backgroundImage: "url(/assets/image/background_imsi.png)",
            }}
          >
            <p className="story_title">{c.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
