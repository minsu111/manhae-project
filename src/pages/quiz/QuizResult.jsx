import React, { useEffect, useState } from "react";

import "./quizResult.scss";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

const QuizResult = () => {
  const correctNum = sessionStorage.getItem("score");
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  const score = ((correctNum / 15) * 100).toFixed();

  return (
    <div style={{ fontSize: `${fontSize}vw`, paddingLeft: "200px" }}>
      <p>맞힌 퀴즈 개수: {correctNum}</p>
      <p>{score}점</p>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default QuizResult;
