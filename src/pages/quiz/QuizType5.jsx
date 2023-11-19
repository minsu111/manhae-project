import React, { useState } from "react";
import TTSSpeaker from "../../components/collection/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import correctAudio from "../../audio/correct.wav";
import wrongAudio from "../../audio/wrong.wav";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quizType5.scss";
import { useNavigate, useParams } from "react-router-dom";

const Quiz5 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");

  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
  const language = sessionStorage.getItem("language");

  const { id } = useParams();

  const quizList =
    language === "Ko"
      ? QuizList.filter((object) => id === object.id)
      : QuizListEn.filter((object) => id === object.id);
  const quizItem = quizList[0];

  const navigate = useNavigate();

  const handleQuizBtn = (e) => {
    if (result === null) {
      const value = e.target.value;

      setBtnActive(value);
      setTimeout(() => {
        value === quizItem.answer ? setResult("correct") : setResult("wrong");
        const newAudio = new Audio(
          value === quizItem.answer ? correctAudio : wrongAudio
        );
        newAudio.play();
      }, 400);

      setTimeout(() => {
        value === quizItem.answer && navigate("/");
        setBtnActive("");
        setResult(null);
      }, 3000);
    }
  };

  return (
    <div className="quiz1_container" style={{ fontSize: `${fontSize}vw` }}>
      <div className="quiz2_all_wrapper">
        <div className="quiz_10th_title_wrapper">
          <div className="quiz_10th_title_section">
            <h1>{quizItem.title}</h1>
            <hr />
            <p className="quiz_question">{quizItem.question}</p>
          </div>
          <div className="quiz_status">
            <img src={`/assets/quiz/10.png`} alt="10 / 10" />
          </div>
        </div>
        <div className="quiz_10th_section">
          <div className="quiz_10th_img">
            <img
              className="quiz_img"
              src={quizItem.quizImageURL}
              alt={quizItem.title}
            />
          </div>

          <div className="quiz_10th_right_section">
            {quizItem.description ? (
              <div className="quiz_10th_desc_text">
                <p>{quizItem.description}</p>
              </div>
            ) : null}

            <div className="quiz_10th_btn">
              {quizItem.answerBtnList.map((item) => {
                return (
                  <button
                    key={item.id}
                    value={item}
                    onClick={handleQuizBtn}
                    className="quiz_10th_btn_object"
                    style={{
                      backgroundImage: `url("${
                        item === btnActive
                          ? "/assets/quiz/quiz_btn_active_bg1.png" // 활성화 상태일 때의 이미지
                          : "/assets/quiz/quiz_btn_bg1.png" // 디폴트 이미지
                      }")`,
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="quiz_result">
          {result === "correct" && (
            <img src={"/assets/quiz/quiz_O.png"} alt={"정답"} />
          )}
          {result === "wrong" && (
            <img id="wrong_img" src={"/assets/quiz/quiz_X.png"} alt={"땡"} />
          )}
        </div>
      </div>
      <div className="play_btn">
        <TTSSpeaker />
      </div>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default Quiz5;
