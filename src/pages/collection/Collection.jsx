import React from "react";
import { Link } from "react-router-dom";
import collectionList from "../../data/CollectionData";

import "./collection.scss";

export const Collection = () => {
  return (
    <div>
      <div className="category">
        <button>ALL</button>
        <button>안목을 세우다</button>
        <button>불교인</button>
        <button>삼일운동</button>
        <button>침묵의 미학</button>
        <button>설중매화</button>
        <button>심우장의 정절</button>
        <button>만해가 떠난후</button>
      </div>
      <section className="img_section">
        {collectionList.map((v, i) => {
          return (
            <div key={i} className="items">
              <div className="figure">
                <Link to={`/collection/detail/${i}`}>
                  <img src={v.imgURL} alt={"소장품 이미지"} className="image" />
                </Link>
                <div className="main_title">{v.name}</div>
                {/* <div>{v.description}</div> */}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
