import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { QuizScoreContext } from "../../context/QuizScoreContext";

import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import correctAudio from "../../audio/correct.wav";
import wrongAudio from "../../audio/wrong.wav";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quizType5.scss";

const Quiz5 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");
  const { language } = useContext(LanguageContext);
  const { setQuizScore } = useContext(QuizScoreContext);

  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  const { id } = useParams();

  const quizList =
    language === "Ko"
      ? QuizList.filter((object) => id === object.id)
      : QuizListEn.filter((object) => id === object.id);
  const quizItem = quizList[0];

  const navigate = useNavigate();

  useEffect(() => {
    const storedQuizScore = sessionStorage.getItem("QuizList");
    if (storedQuizScore) {
      setQuizScore(JSON.parse(storedQuizScore));
    }
  }, [setQuizScore]);

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
        if (value === quizItem.answer) {
          setQuizScore((prevScore) => {
            const newScore = { ...prevScore, 10: true };
            sessionStorage.setItem("QuizList", JSON.stringify(newScore));
            return newScore;
          });
          navigate(`/quiz/${Number(id) + 1}`);
        } else {
          setQuizScore((prevScore) => {
            const newScore = { ...prevScore, 10: false };
            sessionStorage.setItem("QuizList", JSON.stringify(newScore));
            return newScore;
          });
          setBtnActive(quizItem.answer);
          setResult(null);
          setTimeout(() => {
            navigate(`/quiz/${Number(id) + 1}`);
          }, 2000);
        }
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
