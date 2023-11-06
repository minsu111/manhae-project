import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail1.scss";

export const MedalDetail1 = () => {
  return (
    <div className="medal_main_container">
      <div className="section_wrapper1">
        <div className="medal_detail1_seciton">
          <h2>건국훈장 ‒ 대한민국장(Republic of Korea Medal)</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장에서 최고 등급인 대한민국장에는 임시정부 주석 김구 선생,
            청산리대첩 김좌진 장군, 도산 안창호 선생, 이토 히로부미를 안중근
            의사, 윤봉길 의사, 저항 문학가 한용운 선생, 삼일 운동의 유관순 열사
            등 명의 위인분들이 수여 받았습니다.
          </p>
        </div>
        <div className="medal_detail1_seciton">
          <h2>전체 33명 위인 명단</h2>
          <hr className="dividing_line" />
          <p>
            강우규, 김구, 김규식, 김좌진, 김창숙, 민영환, 서재필, 손문, 손병희,
            송미령, 신익희, 안중근, 안창호, 여운형, 오동진, 유관순, 윤봉길,
            이강년, 이승만, 이승훈, 이시영, 이준, 임병직, 장개석, 조만식,
            조병세, 조소앙, 진과부, 진기미, 최익현, 한용운, 허위, 홍범도
          </p>
        </div>
      </div>
    </div>
  );
};
