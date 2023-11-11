import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail1.scss";

export const MedalDetail1 = () => {
  return (
    <div className="medal_main_container">
      <div className="detail1_section_wrapper1">
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
        <div className="medal_detail1_img_1">
          <img
            src={"/assets/medal/medal_detail1_2.png"}
            alt={"훈장 설명 이미지"}
          />
          <p>
            1. 무궁화엽환(無窮花葉環): 대한민국의 번영을 표시 <br />
            2. 태양지(太陽支): 국위 선양을 상징 <br />
            3. 대지(大支): 국민의 높은 기개를 의미 <br />
            4. 서지(瑞支): 노고가 찬연히 빛남을 의미 <br />
            5. 자옥(紫玉): 노고의 결실을 의미 <br />
            6. 승환(繩環): 민족의 결속을 표시 <br />
            7. 태극(太極): 대한민국을 뜻함 <br />
            ※수의 홍색은 정력적 투지력을, 황색은 단결을 상징
          </p>
        </div>
      </div>
      <div className="detail1_section_wrapper2">
        <img
          src={"/assets/medal/medal_detail1_1.jpeg"}
          alt={"훈장 설명 이미지"}
        />
      </div>
    </div>
  );
};
