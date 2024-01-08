import React, { useContext, useEffect, useState } from "react";

import "./quizResult.scss";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";
import { QuizScoreContext } from "../../context/QuizScoreContext";

const QuizResult = () => {
  // const correctNum = sessionStorage.getItem("score");
  const quizScore = JSON.parse(sessionStorage.getItem("QuizList"));
  const quizScoreValues = Object.values(quizScore);
  const correctQuizList = quizScoreValues.filter((object) => object === true);
  const correctNum = correctQuizList.length;
  const baseFontSize = 3;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
  const score = ((correctNum / 15) * 100).toFixed();
  const language = sessionStorage.getItem("language");

  return (
    <div
      className="quiz_result_container"
      style={{
        backgroundImage: `url("/assets/quiz/quiz_result_bg.jpeg")`,
      }}
    >
      <div className="quiz_result_text_wrapper">
        <img
          src={`/assets/quiz/quiz_result_text_${language}.png`}
          alt={"퀴즈풀이가 끝났습니다!"}
        />
      </div>
      <div className="quiz_result_wrapper">
        <div
          className="quiz_result_wrong"
          style={{ fontSize: `${fontSize}vw` }}
        >
          <div id="quiz_result_wrong_num">
            <p>{15 - correctNum}</p>
          </div>
          <img src={"/assets/quiz/quiz_result_wrong.png"} alt={"틀린 개수"} />
        </div>
        <div
          className="quiz_result_correct"
          style={{ fontSize: `${fontSize}vw` }}
        >
          <div id="quiz_result_correct_num">
            <p>{correctNum ? correctNum : 0}</p>
          </div>
          <img src={"/assets/quiz/quiz_result_correct.png"} alt={"맞힌 개수"} />
        </div>
      </div>
      <div className="quiz_result_score_wrapper">
        {language === "Ko" ? <p>{score} 점</p> : <p>{score} Points</p>}
      </div>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default QuizResult;
