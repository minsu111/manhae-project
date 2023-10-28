import React from "react";
import { Link } from "react-router-dom";
import collectionList from "../../data/CollectionData";

import "./collection.scss";

export const Collection = () => {
  return (
    <section className="img_section">
      {collectionList.map((v, i) => {
        return (
          <div key={i} className="items">
            <div className="figure">
              <Link to={`/collection/detail/${i}`}>
                <img src={v.imgURL} alt={"소장품 이미지"} className="image" />
              </Link>
              <div>{v.name}</div>
              {/* <div>{v.description}</div> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};
