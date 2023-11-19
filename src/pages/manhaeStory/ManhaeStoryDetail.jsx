import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ManhaeStoryList from "../../data/ManhaeStory";

import "./manhaeStoryDetail.scss";
import ReactPlayer from "react-player";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

const ManhaeStoryDetail = () => {
  const baseFontSize = 1.2;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
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
        src={"/assets/image/manhaeStory_object.png"}
        alt={"만해"}
      />
      <h1>{ManhaeStoryList[id][title]}</h1>
      <div className="story_content_wrapper">
        <ReactPlayer
          url={`/video/manhaeStory/${ManhaeStoryList[id][videoURL]}`}
          playing
          controls={false}
          width="40vw"
          height="100%"
        />

        <div className="text_content" style={{ fontSize: `${fontSize}vw` }}>
          <p>{ManhaeStoryList[id][text]}</p>
          <p>{ManhaeStoryList[id].source}</p>
        </div>
      </div>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default ManhaeStoryDetail;
