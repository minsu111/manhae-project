import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail3.scss";

export const MedalDetail3 = () => {
  return (
    <div className="medal_detail3_container">
      <div className="section_wrapper3">
        <div className="medal_detail3_seciton">
          <h2>건국훈장 ‒ 독립장(Independence Medal)</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장에서 3등급인 독립장에는 여성독립운동가 김 마리아, 윤동주
            시인, 우당 김희영, 제암리 사건을 전 세계에 알린 스코필드 박사등의
            위인분들이 수여 받았습니다.
          </p>
        </div>
        <div className="medal_detail3_seciton">
          <h2>건국훈장 ‒ 애국장(Patriotic Medal)</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장에서 4등급인 애국장에는 재야 대통령 장준하, 저항시인 이육사,
            송몽규 등의 위인분들이 수여 받았습니다.
          </p>
        </div>
        <div className="medal_detail3_seciton">
          <h2>건국훈장 ‒ 애족장(National Medal)</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장에서 5등급인 애족장에는 후세다쓰지, 여성 계몽을 이끈
            차미리사 여사 등의 위인분들이 수여 받았습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
