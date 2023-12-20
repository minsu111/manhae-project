import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./test.scss";

const Test1 = () => {
  const handlePrevBtn = () => {
    window.history.back();
  };
  const handleNextBtn = () => {
    window.history.back();
  };
  return (
    <div className="test_all_wrapper">
      <h1>독립유공자 홈페이지</h1>
      <div
        className="iframe_wrapper"
        style={{
          backgroundColor: "white",
          width: "80%",
        }}
      >
        <iframe
          width="100%"
          height="80%"
          src="https://www.mpva.go.kr/mpva/contents.do?key=105"
          title="독립유공자 사이트"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <div>
        <button onClick={handlePrevBtn}>이전페이지</button>
        <button onClick={handleNextBtn}>다음페이지</button>
      </div>
    </div>
  );
};

export default Test1;
