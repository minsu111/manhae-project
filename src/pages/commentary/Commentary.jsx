import React, { useState } from "react";
import VideoList from "../../data/Video";

import "./commentary.scss";
import { VideoPlayer } from "../../components/commentary/VideoPlayer";

export const Commentary = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  const openModalHandler = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setOpenModal(!openModal);
  };

  return (
    <section className="video_thumb_section">
      {VideoList.map((v, i) => {
        return (
          <div key={i} className="video_thumb_items">
            <div onClick={() => openModalHandler(v.video)} className="figure">
              <img
                src={v.thumbImg}
                alt={"영상 섬네일"}
                className="video_thumb_img"
              />
              <div className="video_title">{v.title}</div>
            </div>
          </div>
        );
      })}
      {openModal && (
        <div className="modal_backdrop" onClick={openModalHandler}>
          <div className="modal_view" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer videoURL={selectedVideoUrl} />
          </div>
          <button className="exit_btn" onClick={openModalHandler}>
            X
          </button>
        </div>
      )}
    </section>
  );
};
