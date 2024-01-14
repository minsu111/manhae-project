import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { VideoPlayer } from "../../components/commentary/VideoPlayer";
import { useNavigate } from "react-router-dom";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";

import VideoList from "../../data/Commentary";
import YouTubeList from "../../data/YouTube";
import DocList from "../../data/Documentary";

import "./commentary.scss";

const Commentary = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [category, setCategory] = useState(0);
  const [stopPlay, setStopPlay] = useState(false);

  // 다국어 처리
  const { language } = useContext(LanguageContext);
  const title = "title" + language;
  const video = "video" + language;
  const name = "name" + language;

  const openModalHandler = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (openModal === true) {
      setStopPlay(!stopPlay);
    }
  }, [openModal]);

  const navigate = useNavigate();

  const MenuArr = [
    {
      code: 0,
      nameKo: "소장품 해설",
      nameEn: "Commentary",
      contents: VideoList,
    },
    {
      code: 1,
      nameKo: "만해기념관",
      nameEn: "Manhae Museum",
      contents: YouTubeList,
    },
    { code: 2, nameKo: "다큐멘터리", nameEn: "Documentary", contents: DocList },
  ];

  const categoryClass = ` category ${
    language === "Ko" ? "category_ko_commentary" : "category_en_commentary"
  }`;

  const categoryItemClass =
    language === "Ko" ? "category_item_ko" : "category_item_en_commentary";

  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
  };

  const VideoData = MenuArr[category].contents;

  return (
    <div className="commentary_wrapper">
      {/* 탭 영역 */}
      <div className={categoryClass}>
        {MenuArr.map((c, i) => (
          <div key={i.code} className={categoryItemClass}>
            <label>
              <input
                type="radio"
                name="category"
                id={c.code}
                value={c.code}
                onChange={handleCategory}
                checked={category === c.code}
              />
              <span className="category_name">{c[name]}</span>
            </label>
          </div>
        ))}
      </div>
      {/* 리스트 영역 */}
      <section className="video_thumb_section">
        {VideoData.map((v, i) => {
          return (
            <div key={i + language} className="video_thumb_items">
              <div
                onClick={() =>
                  openModalHandler(
                    `/video/commentary/commentary_video/${v[video]}`
                  )
                }
                className="figure"
              >
                <img
                  src={`/video/commentary/commentary_thumbnail/${v.thumbImg}`}
                  alt={"영상 섬네일"}
                  className="video_thumb_img"
                />
                <div className="video_title">{v[title]}</div>
              </div>
            </div>
          );
        })}
        {openModal && (
          <div className="modal_backdrop" onClick={openModalHandler}>
            <div className="modal_view" onClick={(e) => e.stopPropagation()}>
              <VideoPlayer videoURL={selectedVideoUrl} />
            </div>
            <div className="modal_btn_bar_wrapper">
              <div className="modal_btn_bar">
                <button onClick={() => navigate("/")}>
                  <img src={"/assets/image/icon-home.png"} alt={"홈버튼"} />
                </button>
                <button
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  <img
                    src={"/assets/image/icon-backward.png"}
                    alt={"이전버튼"}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="play_btn">
          <TTSSpeaker setStopPlay={setStopPlay} stopPlay={stopPlay} />
        </div>
      </section>
    </div>
  );
};

export default Commentary;
