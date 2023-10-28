import React from "react";
import "./main.scss";

export const Main = () => {
  return (
    <div
      className="main_page"
      style={{ backgroundImage: 'url("/assets/image/mainImg.png")' }}
    >
      <div className="main_buttons_section">
        <button>
          <img src={"/assets/image/icon1-소장품감상.png"} alt={"메인버튼1"} />
        </button>
        <button>
          <img src={"/assets/image/icon2-소장품해설.png"} alt={"메인버튼2"} />
        </button>
        <button>
          <img src={"/assets/image/icon3-만해지혜.png"} alt={"메인버튼3"} />
        </button>
        <button>
          <img src={"/assets/image/icon4-나만의훈장.png"} alt={"메인버튼4"} />
        </button>
        <button>
          <img src={"/assets/image/icon5-전시연계퀴즈.png"} alt={"메인버튼5"} />
        </button>
      </div>
    </div>
  );
};
