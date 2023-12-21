import React, { useEffect, useState } from "react";

import "./quizResult.scss";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

const QuizResult = () => {
  const score = sessionStorage.getItem("score");
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  return (
    <div style={{ fontSize: "100px", paddingLeft: "200px" }}>
      맞힌 퀴즈 개수: {score}
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default QuizResult;
