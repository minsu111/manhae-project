import React, { useState } from "react";

import VideoList from "../../data/Commentary";

import "./commentary.scss";
import { VideoPlayer } from "../../components/commentary/VideoPlayer";
import { useNavigate } from "react-router-dom";

export const Commentary = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  // 다국어 처리
  const language = sessionStorage.getItem("language");
  const title = "title" + language;
  const video = "video" + language;

  const openModalHandler = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setOpenModal(!openModal);
  };

  const navigate = useNavigate();

  return (
    <section className="video_thumb_section">
      {VideoList.map((v, i) => {
        return (
          <div key={i} className="video_thumb_items">
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
                <img src={"/assets/image/icon-backward.png"} alt={"이전버튼"} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
