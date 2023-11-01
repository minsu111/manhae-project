import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextToSpeech from "../../components/collection/TextToSpeech";
import MainList from "../../data/Main";
import SubList from "../../data/Sub";

import "./collectionDetail.scss";
import { Spinner } from "../../components/common/spinner/Spinner";

export const CollectionDetail = ({ fontSize }) => {
  const [subId, setSubId] = useState(null);
  const { id } = useParams();

  const ClickInnerImg = (subId, e) => {
    setSubId(subId);
  };

  useEffect(() => {
    for (let i = 0; i < SubList.length; i++) {
      if (SubList[i].mainId === Number(id)) {
        setSubId(i);
        break;
      }
    }
  }, [id]);

  return (
    <section className="detail_section">
      <div className="text_wrapper">
        <div className="description" style={{ fontSize: `${fontSize}px` }}>
          {MainList[id].description}
        </div>
      </div>
      <Suspense fallback={Spinner}>
        <div className="main_img_wrapper">
          {subId !== null && (
            <img
              src={SubList[subId].originImg}
              alt={SubList[subId].title}
              className="main_img"
            />
          )}
        </div>

        <div className="right_contents_wrapper">
          <div className="inner_page_list">
            {SubList.map(
              (item, i) =>
                item.mainId === Number(id) && (
                  <div className="inner_pages" key={"inner" + i}>
                    <div
                      onClick={(e) => {
                        ClickInnerImg(i, e);
                      }}
                      className="inner_figure"
                    >
                      <img
                        src={item.thumbImg}
                        alt={item.title}
                        className="inner_img"
                      />
                      <div className="inner_text">{item.title}</div>
                    </div>
                  </div>
                )
            )}
          </div>
          <TextToSpeech text={MainList[id].description} className="play_btn" />
        </div>
      </Suspense>
    </section>
  );
};
