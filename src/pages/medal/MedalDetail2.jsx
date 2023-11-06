import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail2.scss";

export const MedalDetail2 = () => {
  return (
    <div className="medal_main_container">
      <div className="section_wrapper2">
        <div className="medal_detail2_seciton">
          <h2>대한민국 훈장</h2>
          <hr className="dividing_line" />
          <p>
            우리나라는 무궁화대훈장을 정점으로 건국훈장, 국민훈장, 무공훈장,
            근정훈장, 보국훈장, 수교훈장, 산업훈장, 새마을훈장, 문화훈장,
            체육훈장, 과학기술훈장 등 총 가지의 훈장이 있습니다.
          </p>
        </div>
        <div className="medal_detail2_seciton">
          <h2>건국훈장</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장 건국훈장은 대한민국의 건국에 공로가 뚜렷하거나, 국기를
            공고히 함에 기여한 공적이 뚜렷한 자에게 수여됩니다. 그리고
            건국훈장은 등급으로 나누어 집니다.
          </p>
        </div>
      </div>
    </div>
  );
};
