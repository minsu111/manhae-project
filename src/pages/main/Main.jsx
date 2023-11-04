import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuList from "../../data/Menu";

import "./main.scss";

export const Main = () => {
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
    <div className="main_page">
      <img
        className="main_page_img"
        src={"/assets/image/mainImg.png"}
        alt={"메인페이지"}
      />
      <div className="main_buttons_section">
        {MenuList.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              goToSection(c.path);
            }}
          >
            <img src={c[btnImgUrl]} alt={c.sectionName} />
          </button>
        ))}
      </div>
      <div>
        <div className="lang_btn_wrapper">
          <label className="left_side">
            <input
              type="radio"
              name="language"
              value="Ko"
              onChange={handleLanguage}
              checked={languageType === "Ko"}
            />
            <span>korean</span>
          </label>
          <label className="right_side">
            <input
              type="radio"
              name="language"
              value="En"
              onChange={handleLanguage}
              checked={languageType === "En"}
            />
            <span>English</span>
          </label>
        </div>
      </div>
    </div>
  );
};
