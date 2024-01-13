import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizScoreContext } from "../../context/QuizScoreContext";
import { LanguageContext } from "../../context/LanguageContext";

import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";

import MenuList from "../../data/Menu";

import "./main.scss";

const Main = () => {
  const { setQuizScore } = useContext(QuizScoreContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const [btnImgUrl, setBtnImgUrl] = useState("btnImg" + language);
  const navigate = useNavigate();

  const goToSection = (path) => {
    navigate(`/${path}`);
    sessionStorage.setItem("menu", path);
  };

  const handleLanguage = (e) => {
    sessionStorage.setItem("language", e.target.value);
    setLanguage(e.target.value);
    setBtnImgUrl("btnImg" + e.target.value);
  };

  sessionStorage.removeItem("category");
  sessionStorage.removeItem("QuizList");

  return (
    <div
      className="main_page"
      style={{
        backgroundImage: `url("/assets/image/mainImg_${language}.png")`,
      }}
    >
      <div className="main_buttons_section">
        {MenuList.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              goToSection(c.path);
              setQuizScore({});
            }}
          >
            <img
              src={c[btnImgUrl]}
              alt={c.sectionName}
              style={{ paddingBottom: language === "En" && "3.5%" }}
            />
          </button>
        ))}
      </div>
      <div>
        <div className="lang_btn_wrapper">
          <div className="ko_btn">
            <label>
              <input
                type="radio"
                name="language"
                value="Ko"
                onChange={handleLanguage}
                checked={language === "Ko"}
              />
              <span
                style={{
                  color: language === "Ko" ? "#3281BC" : "#534E4E",
                }}
              >
                Korean
              </span>
            </label>
          </div>
          <div className="btn_divide_line"></div>
          <div className="en_btn">
            <label>
              <input
                type="radio"
                name="language"
                value="En"
                onChange={handleLanguage}
                checked={language === "En"}
              />
              <span
                style={{
                  color: language === "En" ? "#3281BC" : "#534E4E",
                }}
              >
                English
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="main_play_btn">
        <TTSSpeaker />
      </div>
    </div>
  );
};

export default Main;
