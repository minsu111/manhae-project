import React from "react";
import VideoList from "../../data/Video";

import "./commentary.scss";

export const Commentary = () => {
  return (
    <section className="video_thumb_section">
      {VideoList.map((v, i) => {
        return (
          <div key={i} className="video_thumb_items">
            <div className="figure">
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
    </section>
  );
};
