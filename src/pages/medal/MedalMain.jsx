import React from "react";
import { Link } from "react-router-dom";

import "./medalMain.scss";

export const MedalMain = () => {
  return (
    <div
      className="medal_main_container"
      style={{ backgroundImage: 'url("/assets/image/medalMain_bg.jpeg")' }}
    >
      <div className="section_wrapper">
        <div className="section1">
          <h1>대한민국 훈장</h1>
          <hr className="dividing_line" />
          <p>
            우리나라는 무궁화대훈장을 정점으로 건국훈장, 국민훈장, 무공훈장,
            근정훈장, 보국훈장, 수교훈장, 산업훈장, 새마을훈장, 문화훈장,
            체육훈장, 과학기술훈장 등 총 가지의 훈장이 있습니다.
          </p>
        </div>
        <div className="section2">
          <h2>건국훈장</h2>
          <hr className="dividing_line" />
          <p>
            건국훈장 건국훈장은 대한민국의 건국에 공로가 뚜렷하거나, 국기를
            공고히 함에 기여한 공적이 뚜렷한 자에게 수여됩니다. 그리고
            건국훈장은 등급으로 나누어 집니다.
          </p>
        </div>
        <div className="medal_main_btn_wrapper">
          <Link to="/medal/1" className="medal_main_btn">
            <img
              src={"/assets/image/button_blue_1.png"}
              alt={"1등급 - 대한민국장"}
            />
            <span>1등급 - 대한민국장</span>
          </Link>
          <Link to="/medal/2" className="medal_main_btn">
            <img
              src={"/assets/image/button_blue_1.png"}
              alt={"2등급 - 대통령장"}
            />
            <span>2등급 - 대통령장</span>
          </Link>
          <Link to="/medal/3" className="medal_main_btn">
            <img
              src={"/assets/image/button_blue_2.jpeg"}
              alt={"3등급, 4등급, 5등급"}
            />
            <span className="medal_main_btn_2_text">
              3등급 - 대통령장
              <br /> 4등급 - 대통령장
              <br /> 4등급 - 대통령장
              <br /> *버튼 이미지 교체 필요
            </span>
          </Link>
          <Link to="/medal/making" className="medal_main_btn">
            <img
              src={"/assets/image/button_blue_1.png"}
              alt={"나만의 훈장 만들기"}
            />
            <span>나만의 훈장 만들기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
