import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail2.scss";

export const MedalDetail2 = () => {
  return (
    <div className="medal_main_container">
      <div className="section_wrapper2">
        <div className="medal_detail2_seciton">
          <h2>건국훈장 ‒ 대통령장(Presidential Medal)</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장에서 2등급인 대통령장에는 한글 대중화와 근대화 개척자 주시경
            선생, 한국독립군 총사령관 지청천 장군, 한인애국단 이봉창 의사, 단재
            신채호, 평민 의병장 신돌석, 종로경찰서에 폭탄을 투척했던 김상옥 열사
            등의 위인분들이 수여 받았습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
