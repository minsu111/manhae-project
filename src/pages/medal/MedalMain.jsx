import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import "./medalMain.scss";

const MedalMain = () => {
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
  const [openModal, setOpenModal] = useState(false);
  const [iframeLink, setIframeLink] = useState("");

  const language = sessionStorage.getItem("language");

  const navigate = useNavigate();

  const ModalLink = "https://www.sanghun.go.kr/nation/hunjangDetail.html#tab";

  const MedalList1 = [
    {
      code: 0,
      nameKo: "무궁화대훈장",
      link: ModalLink + 1,
    },
    {
      code: 1,
      nameKo: "건국훈장",
      link: ModalLink + 2,
    },
    {
      code: 2,
      nameKo: "국민훈장",
      link: ModalLink + 3,
    },
    {
      code: 3,
      nameKo: "무공훈장",
      link: ModalLink + 4,
    },
    {
      code: 4,
      nameKo: "근정훈장",
      link: ModalLink + 5,
    },
    {
      code: 5,
      nameKo: "보국훈장",
      link: ModalLink + 6,
    },
    {
      code: 6,
      nameKo: "수교훈장",
      link: ModalLink + 7,
    },
    {
      code: 7,
      nameKo: "산업훈장",
      link: ModalLink + 8,
    },
    {
      code: 8,
      nameKo: "새마을훈장",
      link: ModalLink + 9,
    },
    {
      code: 9,
      nameKo: "문화훈장",
      link: ModalLink + 10,
    },
    {
      code: 10,
      nameKo: "체육훈장",
      link: ModalLink + 11,
    },
    {
      code: 11,
      nameKo: "과학기술훈장",
      link: ModalLink + 12,
    },
  ];

  const MedalList2 = [
    { code: 0, nameKo: "대한민국장", link: "/medal/1" },
    { code: 1, nameKo: "대통령장", link: "/medal/2" },
    { code: 2, nameKo: "독립장", link: "/medal/3" },
    { code: 3, nameKo: "애국장", link: "/medal/3" },
    { code: 4, nameKo: "애족장", link: "/medal/3" },
  ];

  const handleMedalBtn = (link) => {
    setOpenModal(!openModal);
    setIframeLink(link);
  };

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
              대한민국의 훈장은 수여 대상자의 공적내용, 그 공적이 국가사회에
              미친 효과의 정도와 지위 등을 참작하여 수여하는 총 12가지의 훈장
              등급 체계를 보유하고 있습니다.
            </p>
            <div className="medal_main_desc">
              {MedalList1.map((c, i) => (
                <div
                  className="medal_desc_btn"
                  key={i.name}
                  onClick={() => handleMedalBtn(c.link)}
                >
                  {c.nameKo}
                </div>
              ))}
              {openModal && (
                <div className="modal_backdrop" onClick={handleMedalBtn}>
                  <div className="iframe_wrapper">
                    <iframe
                      id="medal_desc_modal"
                      width="100%"
                      height="100%"
                      src={iframeLink}
                      title="description of medal"
                      sandbox="allow-same-origin allow-scripts"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
            <p>
              무궁화대훈장은 대통령과 배우자 또는 우리나라의 발전과 안전보장에
              기여한 공적이 뚜렷한 전직 우방원수 및 그 배우자에게만 수여됩니다.
            </p>
          </div>
          <div className="section2">
            <hr className="dividing_line" />
            <p>
              <span>건국훈장</span>은 대한민국의 건국에 공로가 뚜렷하거나,
              국기를 공고히 함에 기여한 공적이 뚜렷한 자에게 수여됩니다. 그리고
              건국훈장은 등급으로 나누어 집니다.
            </p>
            <div className="medal_main_desc">
              {MedalList2.map((c, i) => (
                <div
                  className="medal_desc_btn"
                  key={i.code}
                  onClick={() => {
                    navigate(c.link);
                  }}
                >
                  {c.nameKo}
                </div>
              ))}
            </div>
            <p>
              만해 한용운이 받은 건국훈장 대한민국장은 대통령이 아닌 인물이 받을
              수 있는 최고의 대한민국 훈장으로 평가됩니다.
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
              individuals who have made significant contributions to the
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
      <Link to="/medal/making" className="medal_making_btn">
        <img
          src={"/assets/medal/medal_ko_4_r1.png"}
          alt={"나만의 훈장 만들기"}
        />
      </Link>
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
