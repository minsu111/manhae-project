import React, { useState } from "react";
import { useParams } from "react-router-dom";
import collectionList from "../../data/CollectionData";

import "./collectionDetail.scss";
import TextToSpeech from "../../components/collection/TextToSpeech";

export const CollectionDetail = () => {
  const [innerInfo, setIneerInfo] = useState(null);
  const { id } = useParams();

  const ClickInnerImg = (item, e) => {
    setIneerInfo(item);
  };

  return (
    <section className="detail_section">
      <div className="text_wrapper">
        <div className="text">{collectionList[id].description}</div>
      </div>

      {innerInfo === null ? (
        <div className="main_img_wrapper">
          <img
            src={collectionList[id].imgURL}
            alt={"메인이미지"}
            className="main_img"
          />
        </div>
      ) : (
        <div className="main_img_wrapper">
          <img
            src={innerInfo.imgURL}
            alt={innerInfo.name}
            className="main_img"
          />
        </div>
      )}
      <div style={{ width: "20%" }}>
        <div className="inner_page_list">
          {collectionList[id].subList.map((item, i) => (
            <div className="inner_pages" key={"inner" + i}>
              <div
                onClick={(e) => {
                  ClickInnerImg(item, e);
                }}
                className="inner_figure"
              >
                <img
                  src={item.imgURL}
                  alt={"속지 이미지"}
                  className="inner_img"
                />
                <div className="inner_text_wrapper">
                  <div className="inner_text">{item.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TextToSpeech text={collectionList[id].description} />
      </div>
    </section>
  );
};
