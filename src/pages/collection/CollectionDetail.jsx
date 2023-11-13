import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextToSpeech from "../../components/collection/TextToSpeech";
import CollectionList from "../../data/Collection";
import SubList from "../../data/Sub";

import "./collectionDetail.scss";
import { Spinner } from "../../components/common/spinner/Spinner";

export const CollectionDetail = ({ fontSize }) => {
  const [subId, setSubId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const ClickInnerImg = (subId, e) => {
    setSubId(subId);
  };

  // 다국어 처리
  const language = sessionStorage.getItem("language");
  const description = "desc" + language;
  const title = "title" + language;

  useEffect(() => {
    for (let i = 0; i < SubList.length; i++) {
      if (SubList[i].mainId === Number(id)) {
        setSubId(i);
        break;
      }
    }

    if (CollectionList.length > 0) {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <section className="detail_section">
      <div className="text_wrapper">
        <div className="description" style={{ fontSize: `${fontSize}px` }}>
          {CollectionList[id][description]}
        </div>
      </div>
      <Suspense fallback={Spinner}>
        <div className="main_img_wrapper">
          <div className="detail_main_title">{CollectionList[id][title]}</div>
          {subId !== null && (
            <img
              src={SubList[subId].originImg}
              alt={SubList[subId][title]}
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
                        alt={item[title]}
                        className="inner_img"
                      />
                      <div className="inner_text">
                        {String(item.subId + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <TextToSpeech
            text={CollectionList[id][description]}
            className="play_btn"
          />
        </div>
      </Suspense>
    </section>
  );
};
