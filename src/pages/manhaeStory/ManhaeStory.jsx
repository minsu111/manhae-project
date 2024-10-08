import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import ManhaeStoryList from "../../data/ManhaeStory";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import { VideoPlayer } from "../../components/commentary/VideoPlayer";

import "./manhaeStory.scss";

const ManhaeStory = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [playIntro, setPlayIntro] = useState(false);

  // 다국어 처리
  const { language } = useContext(LanguageContext);
  const title = "title" + language;

  useEffect(() => {
    const menu = sessionStorage.getItem("menu");
    if (menu === "manhaeStory") {
      // setPlayIntro(true);
      sessionStorage.removeItem("category");
    }
    sessionStorage.removeItem("menu");
  }, []);

  const handleVideoEnd = () => {
    setPlayIntro(false);
  };

  return (
    <div className="manhae_story_wrapper">
      {playIntro && (
        <div
          className="modal_backdrop"
          onClick={() => {
            setPlayIntro(!playIntro);
          }}
        >
          <div className="modal_view" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer
              videoURL="/video/commentary/commentary_video/.mp4"
              handleVideoEnd={handleVideoEnd}
              ref={videoRef}
            />
          </div>
          <div className="modal_btn_bar_wrapper"></div>
        </div>
      )}
      <img
        className="top_img"
        src={"/assets/image/manhaeStory_object.png"}
        alt={"만해"}
      />
      {language === "Ko" ? (
        <div className="title_section">
          <h1>만해 한용운 말꽃 모음</h1>
          <p>말꽃을 터치하시면 자세히 볼 수 있습니다.</p>
        </div>
      ) : (
        <div className="title_section">
          <h1 style={{ fontSize: "2vw" }}>
            Collection of Manhae
            <br />
            Han Yong-un's Word Blossoms
          </h1>
          <p
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "1%",
              marginLeft: "3%",
            }}
          >
            Touch the button to see more details
          </p>
        </div>
      )}

      <div className="story_title_section">
        {ManhaeStoryList.map((c, i) => (
          <div
            key={c.id}
            className="story_item"
            onClick={() => {
              navigate(`/manhaeStory/detail/${i}`);
            }}
          >
            <img src={"/assets/image/manhaeStoryBg.png"} alt={"만해이야기"} />
            <p className={language === "Ko" ? "" : "story_title_en"}>
              {c[title]}
            </p>
          </div>
        ))}
      </div>
      <div className="play_btn">
        <TTSSpeaker />
      </div>
    </div>
  );
};

export default ManhaeStory;
