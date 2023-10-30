import React, { useNavigate } from "react-router-dom";

import "./buttonBar.scss";
import { useState } from "react";

export const ButtonBar = () => {
  const navigate = useNavigate();

  return (
    <div className="btn_bar_wrapper">
      <div className="btn_bar">
        <button onClick={() => navigate("/")}>
          <img src={"/assets/image/icon-home.png"} alt={"홈버튼"} />
        </button>
        <button onClick={() => navigate(-1)}>
          <img src={"/assets/image/icon-backward.png"} alt={"이전버튼"} />
        </button>
        <button>
          <img src={"/assets/image/아이콘 확대01 77x67.png"} alt={"확대버튼"} />{" "}
        </button>
        <button>
          <img src={"/assets/image/아이콘 축소01 77x67.png"} alt={"축소버튼"} />
        </button>
      </div>
    </div>
  );
};
