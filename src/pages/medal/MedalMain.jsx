import React, { useState } from "react";
import { Link } from "react-router-dom";

import TTSSpeaker from "../../components/collection/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import "./medalMain.scss";

const MedalMain = () => {
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  const language = sessionStorage.getItem("language");

  return (
    <div
      className="medal_main_container"
      style={{ backgroundImage: 'url("/assets/image/medalMain_bg.jpeg")' }}
    >
      {language === "Ko" ? (
        <div className="section_wrapper" style={{ fontSize: `${fontSize}vw` }}>
          <div className="section1">
            <h1>대한민국 훈장</h1>
            <hr className="dividing_line" />
            <p>
              우리나라는 무궁화대훈장을 정점으로 건국훈장, 국민훈장, 무공훈장,
              근정훈장, 보국훈장, 수교훈장, 산업훈장, 새마을훈장, 문화훈장,
              체육훈장, 과학기술훈장 등 총 12가지의 훈장이 있습니다.
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
                src={"/assets/medal/medal_ko_1.png"}
                alt={"1등급 - 대한민국장"}
              />
            </Link>
            <Link to="/medal/2" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_ko_2.png"}
                alt={"2등급 - 대통령장"}
              />
            </Link>
            <Link to="/medal/3" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_ko_3.png"}
                alt={"3등급, 4등급, 5등급"}
              />
            </Link>
            <Link to="/medal/making" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_ko_4.png"}
                alt={"나만의 훈장 만들기"}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="section_wrapper" style={{ fontSize: `${fontSize}vw` }}>
          <div className="section1_en">
            <h1>Order of the Republic of Korea</h1>
            <hr className="dividing_line" />
            <p>
              Our country has a total of 12 orders, starting with the Grand
              Order of Mugunghwa at the pinnacle, followed by the Order of Merit
              for National Foundation, Order of Civil Merit, Order of Military
              Merit, Order of Service Merit, Order of National Security Merit,
              Order of Diplomatic Service Merit, Order of Industrial Service
              Merit, Order of Saemaeul Service Merit, Order of Culture Merit,
              Order of Sport Merit, and the Order of Science and Technology
              Merit.
            </p>
          </div>
          <div className="section2_en">
            <h2>Order of Merit for National Foundation</h2>
            <hr className="dividing_line" />
            <p>
              The Order of Merit for National Foundation is awarded to
              individuals who have m ade significant contributions to the
              establishment of the Republic of Korea or have played a notable
              role in solidifying the national flag. Additionally, the Order of
              Merit for National Foundation is divided into different grades.
            </p>
          </div>
          <div className="medal_main_btn_wrapper_en">
            <Link to="/medal/1" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_en_1.png"}
                alt={"1등급 - 대한민국장"}
              />
            </Link>
            <Link to="/medal/2" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_en_2.png"}
                alt={"2등급 - 대통령장"}
              />
            </Link>
            <Link to="/medal/3" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_en_3.png"}
                alt={"3등급, 4등급, 5등급"}
              />
            </Link>
            <Link to="/medal/making" className="medal_main_btn">
              <img
                src={"/assets/medal/medal_en_4.png"}
                alt={"나만의 훈장 만들기"}
              />
            </Link>
          </div>
        </div>
      )}
      <div className="play_btn">
        <TTSSpeaker />
      </div>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default MedalMain;
