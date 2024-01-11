import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import "./medalMain.scss";

const MedalMain = () => {
  const { language } = useContext(LanguageContext);
  const baseFontSize = language === "Ko" ? 1 : 0.9;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
  const [openModal, setOpenModal] = useState(false);
  const [iframeLink, setIframeLink] = useState("");

  const name = "name" + language;

  const navigate = useNavigate();

  const ModalLink = "https://www.sanghun.go.kr/nation/hunjangDetail.html#tab";

  const MedalList1 = [
    {
      code: 0,
      nameKo: "무궁화대훈장",
      nameEn: "Grand Order of Mugunghwa",
      link: ModalLink + 1,
    },
    {
      code: 1,
      nameKo: "건국훈장",
      nameEn: "Order of Merit for National Foundation",
      link: ModalLink + 2,
    },
    {
      code: 2,
      nameKo: "국민훈장",
      nameEn: "Order of Civil Merit",
      link: ModalLink + 3,
    },
    {
      code: 3,
      nameKo: "무공훈장",
      nameEn: "Order of Military Merit",
      link: ModalLink + 4,
    },
    {
      code: 4,
      nameKo: "근정훈장",
      nameEn: "Order of Service Merit",
      link: ModalLink + 5,
    },
    {
      code: 5,
      nameKo: "보국훈장",
      nameEn: "Order of National Security Merit",
      link: ModalLink + 6,
    },
    {
      code: 6,
      nameKo: "수교훈장",
      nameEn: "Order of Diplomatic Service Merit",
      link: ModalLink + 7,
    },
    {
      code: 7,
      nameKo: "산업훈장",
      nameEn: "Order of Industrial Service Merit",
      link: ModalLink + 8,
    },
    {
      code: 8,
      nameKo: "새마을훈장",
      nameEn: "Order of Saemaeul Service Merit",
      link: ModalLink + 9,
    },
    {
      code: 9,
      nameKo: "문화훈장",
      nameEn: "Order of Culture Merit",
      link: ModalLink + 10,
    },
    {
      code: 10,
      nameKo: "체육훈장",
      nameEn: "Order of Sport Merit",
      link: ModalLink + 11,
    },
    {
      code: 11,
      nameKo: "과학기술훈장",
      nameEn: "Order of Science and Technology Merit",
      link: ModalLink + 12,
    },
  ];

  const MedalList2 = [
    {
      code: 0,
      nameKo: "1등급. 대한민국장",
      nameEn: "1st Class. Republic of Korea Medal",
      link: "/medal/1",
    },
    {
      code: 1,
      nameKo: "2등급. 대통령장",
      nameEn: "2st Class. Presidential Medal",
      link: "/medal/2",
    },
    {
      code: 2,
      nameKo: "3등급. 독립장",
      nameEn: "3st Class. Independence Medal",
      link: "/medal/3",
    },
    {
      code: 3,
      nameKo: "4등급. 애국장",
      nameEn: "4st Class. Patriotic Medal",
      link: "/medal/3",
    },
    {
      code: 4,
      nameKo: "5등급. 애족장",
      nameEn: "5st Class. National Medal",
      link: "/medal/3",
    },
  ];

  const handleMedalBtn = (link) => {
    setOpenModal(!openModal);
    setIframeLink(link);
  };

  const section1Class = language === "Ko" ? "section1" : "section1 section1_en";
  const section2Class = language === "Ko" ? "section2" : "section2 section2_en";

  return (
    <div
      className="medal_main_container"
      style={{
        backgroundImage: `url("/assets/image/medalMain_bg_${language}.png")`,
      }}
    >
      <div
        className={`section_wrapper_${language}`}
        style={{ fontSize: `${fontSize}vw` }}
      >
        <div className={section1Class}>
          {language === "Ko" ? (
            <>
              <h1>대한민국 훈장</h1>
              <hr className="dividing_line" />
              <p>
                대한민국의 훈장은 수여 대상자의 공적내용, 그 공적이 국가사회에
                미친 효과의 정도와 지위 등을 참작하여 수여하는 총 12가지의 훈장
                등급 체계를 보유하고 있습니다.
              </p>
            </>
          ) : (
            <>
              <h1>Order of the Republic of Korea</h1>
              <hr className="dividing_line" />
              <p>
                South Korea has a system of 12 different classes of orders and
                medals, which are conferred considering the merit of the
                recipients, the impact of their contributions on national
                society, and their status.
              </p>
            </>
          )}
          <div className={`medal_type_desc_${language}`}>
            {MedalList1.map((c, i) => (
              <div className="medal_type_btn_wrapper">
                <div
                  className={`medal_type_btn_${language}`}
                  onClick={() => handleMedalBtn(c.link)}
                >
                  <div key={i.name}>{c[name]}</div>
                  <div className="arrow_wrapper">
                    <img src={"/assets/medal/arrow-right.png"} alt={"보기"} />
                  </div>
                </div>
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
                <div className="modal_btn_bar_wrapper">
                  <div className="modal_btn_bar">
                    <button onClick={() => navigate("/")}>
                      <img src={"/assets/image/icon-home.png"} alt={"홈버튼"} />
                    </button>
                    <button
                      onClick={() => {
                        setOpenModal(!openModal);
                      }}
                    >
                      <img
                        src={"/assets/image/icon-backward.png"}
                        alt={"이전버튼"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {language === "Ko" ? (
            <p>
              <span className="blue_text">무궁화대훈장</span>은 대통령과 배우자
              또는 우리나라의 발전과 안전보장에 기여한 공적이 뚜렷한 전직
              우방원수 및 그 배우자에게만 수여됩니다.
            </p>
          ) : (
            <p className="text_shadow_part_En">
              <span className="blue_text">The Grand Order of Mugunghwa</span> is
              awarded exclusively to the President and their spouse or to former
              foreign heads of state and their spouses who have made significant
              contributions to the development and security of our country.
            </p>
          )}
        </div>
        <div className={section2Class}>
          <hr className="dividing_line" />
          {language === "Ko" ? (
            <p>
              <span className="blue_text">건국훈장</span>은 대한민국의 건국에
              공로가 뚜렷하거나, 국기를 공고히 함에 기여한 공적이 뚜렷한 자에게
              수여됩니다. 그리고 건국훈장은 등급으로 나누어 집니다.
            </p>
          ) : (
            <p>
              <span className="blue_text">
                The Order of Merit for National Foundation
              </span>
              is awarded to individuals with distinguished contributions to the
              establishment of the Republic of Korea, or who have made
              significant efforts in solidifying the foundation of the state.
              The Order of Merit for National Foundation is categorized into the
              following five grades.
            </p>
          )}
          <div className="medal_type_desc2">
            {MedalList2.map((c, i) => (
              <div
                className={`medal_type_btn_bottom_${language}`}
                onClick={() => {
                  navigate(c.link);
                }}
              >
                <div key={i.code}>{c[name]}</div>
                <div className="arrow_wrapper">
                  <img src={"/assets/medal/arrow-right.png"} alt={"보기"} />
                </div>
              </div>
            ))}
          </div>
          {language === "Ko" ? (
            <p className="text_shadow_part">
              만해 한용운이 받은 건국훈장 대한민국장은 대통령이 아닌 인물이 받을
              수 있는 최고의 대한민국 훈장으로 평가됩니다.
            </p>
          ) : (
            <p className="text_shadow_part">
              The Republic of Korea Medal of the Order of Merit for National
              Foundation,
              <br />
              which was awarded to Manhae Han Yong-un, is recognized as the
              highest honor
              <br />
              of the Republic of Korea orders that can be received by a
              non-presidential figure.
            </p>
          )}
        </div>
      </div>
      <Link to="/medal/making" className={`medal_making_btn_${language}`}>
        <img
          src={`/assets/medal/making_medal_btn_${language}.png`}
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
