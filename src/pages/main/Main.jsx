import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";

import MenuList from "../../data/Menu";

import "./main.scss";

const Main = () => {
  const sessionLang = sessionStorage.getItem("language");

  const [languageType, setLanguageType] = useState(sessionLang);
  const [btnImgUrl, setBtnImgUrl] = useState("btnImg" + sessionLang);
  const navigate = useNavigate();

  const goToSection = (path) => {
    navigate(`/${path}`);
    sessionStorage.setItem("menu", path);
  };

  const handleLanguage = (e) => {
    sessionStorage.setItem("language", e.target.value);
    setLanguageType(e.target.value);
    setBtnImgUrl("btnImg" + e.target.value);
  };

  return (
    <div
      className="main_page"
      style={{
        backgroundImage: `url("/assets/image/mainImg_${languageType}.png")`,
      }}
    >
      <div className="main_buttons_section">
        {MenuList.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              goToSection(c.path);
              c.path === "quiz/1" && sessionStorage.removeItem("score");
            }}
          >
            <img
              src={c[btnImgUrl]}
              alt={c.sectionName}
              style={{ paddingBottom: languageType === "En" && "3.5%" }}
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
                checked={languageType === "Ko"}
              />
              <span
                style={{
                  color: languageType === "Ko" ? "#3281BC" : "#534E4E",
                }}
              >
                Korean
              </span>
            </label>
          </div>
          <div className="en_btn">
            <label>
              <input
                type="radio"
                name="language"
                value="En"
                onChange={handleLanguage}
                checked={languageType === "En"}
              />
              <span
                style={{
                  color: languageType === "En" ? "#3281BC" : "#534E4E",
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
