import React from "react";
import "./main.scss";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const goToSection = (path) => {
    navigate(`/${path}`);
  };

  const storeMenu = (e) => {
    sessionStorage.setItem("menu", e.target.alt);
  };

  return (
    <div
      className="main_page"
      style={{ backgroundImage: 'url("/assets/image/mainImg.png")' }}
    >
      <div className="main_buttons_section">
        <button
          value={1}
          onClick={(e) => {
            console.log(e);
            goToSection("collection");
            storeMenu(e);
          }}
        >
          <img src={"/assets/image/icon1-소장품감상.png"} alt={"메인버튼1"} />
        </button>
        <button onClick={() => goToSection("commentary")}>
          <img src={"/assets/image/icon2-소장품해설.png"} alt={"메인버튼2"} />
        </button>
        <button onClick={() => goToSection("collection")}>
          <img src={"/assets/image/icon3-만해지혜.png"} alt={"메인버튼3"} />
        </button>
        <button onClick={() => goToSection("collection")}>
          <img src={"/assets/image/icon4-나만의훈장.png"} alt={"메인버튼4"} />
        </button>
        <button onClick={() => goToSection("collection")}>
          <img src={"/assets/image/icon5-전시연계퀴즈.png"} alt={"메인버튼5"} />
        </button>
      </div>
    </div>
  );
};
