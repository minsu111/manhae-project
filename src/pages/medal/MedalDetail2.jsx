import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail2.scss";

const MedalDetail2 = () => {
  const language = sessionStorage.getItem("language");

  return (
    <div className="medal_detail2_container">
      <div className="detail2_section_wrapper">
        {language === "Ko" ? (
          <div className="medal_detail2_seciton">
            <h2>건국훈장 ‒ 대통령장(Presidential Medal)</h2>
            <hr className="dividing_line" />
            <p>
              건국훈장에서 2등급인 대통령장에는 한글 대중화와 근대화 개척자
              주시경 선생, 한국독립군 총사령관 지청천 장군, 한인애국단 이봉창
              의사, 단재 신채호, 평민 의병장 신돌석, 종로경찰서에 폭탄을
              투척했던 김상옥 열사 등의 위인분들이 수여 받았습니다.
            </p>
          </div>
        ) : (
          <div className="medal_detail2_seciton">
            <h2>Order of Merit for National Foundation - Presidential Medal</h2>
            <hr className="dividing_line" />
            <p>
              Among the Order of Merit for National Foundation, the second grade
              is the Presidential Medal, which has been awarded to distinguished
              individuals such as Ju Si-gyeong, a pioneer in the popularization
              and modernization of the Korean language; General Ji Cheong-cheon,
              the commander-in-chief of the Korean Independence Army; patriot
              Lee Bong-chang; historian Danjae Shin Chae-ho; commoner militia
              leader Shin Dol-seok; and martyr Kim Sang-ok, who threw a bomb at
              the Jongno Police Station.
            </p>
          </div>
        )}

        <div className="detail2_desc_img">
          <img src={"/assets/medal/medal_detail2.png"} alt={"독립장"} />
        </div>
      </div>
    </div>
  );
};

export default MedalDetail2;
