import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";
import correctAudio from "../../audio/correct.wav";
import wrongAudio from "../../audio/wrong.wav";

import "./quizType2.scss";

const Quiz2 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");
  const [isLaodinged, setIsImageLoaded] = useState(false);
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;
  const { id } = useParams();

  const language = sessionStorage.getItem("language");

  const quizList =
    language === "Ko"
      ? QuizList.filter((object) => id === object.id)
      : QuizListEn.filter((object) => id === object.id);
  const quizItem = quizList[0];

  const navigate = useNavigate();

  useEffect(() => {
    const image = new Image();
    image.src = quizItem.quizImageURL;

    image.onload = () => {
      setIsImageLoaded(true);
    };

    return () => {
      image.onload = null;
      setIsImageLoaded(false);
    };
  }, [quizItem.quizImageURL]);

  const handleQuizBtn = (e) => {
    if (result === null) {
      const value = e.target.value;

      setBtnActive(value);

      const currentScore = Number(sessionStorage.getItem("score"));
      value === quizItem.answer
        ? sessionStorage.setItem("score", currentScore + 1)
        : sessionStorage.setItem("score", currentScore);

      setTimeout(() => {
        value === quizItem.answer ? setResult("correct") : setResult("wrong");

        const newAudio = new Audio(
          value === quizItem.answer ? correctAudio : wrongAudio
        );
        newAudio.play();
      }, 400);

      setTimeout(() => {
        if (value === quizItem.answer) {
          id === "15"
            ? navigate("/quiz/result")
            : navigate(`/quiz/${Number(id) + 1}`);
          setResult(null);
        } else {
          setBtnActive(quizItem.answer);
          setResult(null);
          setTimeout(() => {
            id === "15"
              ? navigate("/quiz/result")
              : navigate(`/quiz/${Number(id) + 1}`);
          }, 2000);
        }
      }, 1500);
    }
  };

  const quizClass =
    id === "8" || id === "11" || id === "12" || id === "14" || id === "15"
      ? "quiz_9th_desc"
      : `quiz2_img ${quizItem.description !== "" ? "withDesc_wrapper" : ""}` +
        (id === "3" ? " quiz4_desc_img" : "");

  return (
    <div className="quiz1_container" style={{ fontSize: `${fontSize}vw` }}>
      {isLaodinged && (
        <div className="quiz2_all_wrapper">
          <div className="quiz_title_wrapper">
            <div className="quiz2_title_section">
              <h1>{quizItem.title}</h1>
              <hr />
              <p
                className={id === "9" ? "quiz_10th_question" : "quiz_question"}
              >
                {quizItem.question}
              </p>
            </div>
            <div className="quiz_status">
              <img
                src={`/assets/quiz/${id.padStart(2, "0")}.png`}
                alt={`${id} / 15`}
              />
            </div>
          </div>
          <div className="quiz2_section">
            <div className={quizClass}>
              <img
                className={
                  `quiz_img ${quizItem.description !== "" ? "withDesc" : ""}` +
                  (id === "3" ? " quiz4_desc_img" : "")
                }
                src={quizItem.quizImageURL}
                alt={quizItem.title}
              />
              {quizItem.description && (
                <div
                  className={id === "3" ? " quiz4_desc_text" : "quiz_desc_text"}
                >
                  <p>{quizItem.description}</p>
                </div>
              )}
            </div>
            <div className="quiz2_btn">
              {quizItem.answerBtnList.map((item) => {
                return (
                  <button
                    value={item}
                    onClick={handleQuizBtn}
                    className={
                      "quiz_btn_object" +
                      (item === btnActive ? " active" : "") +
                      (id === "5" ||
                      id === "8" ||
                      id === "13" ||
                      (id === "9" && language === "En") ||
                      (id === "6" && language === "En") ||
                      (id === "4" && language === "En")
                        ? " quiz_middle_btn"
                        : "") +
                      ((language === "En" && id === "8") ||
                      (language === "En" && id === "5")
                        ? " quiz_long_btn"
                        : "")
                    }
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
          <div className="quiz_result">
            {result === "correct" && (
              <img src={"/assets/quiz/quiz_O.png"} alt={"정답"} />
            )}
            {result === "wrong" && (
              <img id="wrong_img" src={"/assets/quiz/quiz_X.png"} alt={"땡"} />
            )}
          </div>
        </div>
      )}
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

export default Quiz2;
