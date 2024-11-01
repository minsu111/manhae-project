import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { QuizScoreContext } from "../../context/QuizScoreContext";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";

import correctAudio from "../../audio/correct.wav";
import wrongAudio from "../../audio/wrong.wav";

import "./quizType4.scss";

const QuizBtnList = [
  "프랑스어",
  "영어",
  "에스페란토어",
  "체코어",
  "베트남어",
  "힌디어",
];

const QuizBtnListEn = [
  "French",
  "English",
  "Esperanto",
  "Czech",
  "Vietnamese",
  "Hindi",
];

const Quiz4 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState([]);
  const { language } = useContext(LanguageContext);
  const { setQuizScore } = useContext(QuizScoreContext);

  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

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

      if (btnActive.includes(value)) {
        setBtnActive(btnActive.filter((item) => item !== value));
      } else {
        setBtnActive([...btnActive, value]);
      }
    }
  };

  const handleCompleteBtn = () => {
    const correctAnswers =
      language === "Ko"
        ? ["프랑스어", "영어", "에스페란토어", "체코어", "베트남어"]
        : ["French", "English", "Esperanto", "Czech", "Vietnamese"];

    const isCorrect =
      btnActive.length === correctAnswers.length &&
      btnActive.every((value) => correctAnswers.includes(value));

    setResult(isCorrect ? "correct" : "wrong");

    const newAudio = new Audio(isCorrect ? correctAudio : wrongAudio);
    newAudio.play();

    setTimeout(() => {
      if (isCorrect) {
        setQuizScore((prevScore) => {
          const newScore = { ...prevScore, 7: true };
          sessionStorage.setItem("QuizList", JSON.stringify(newScore));
          return newScore;
        });
        navigate("/quiz/8");
      } else {
        setQuizScore((prevScore) => {
          const newScore = { ...prevScore, 7: false };
          sessionStorage.setItem("QuizList", JSON.stringify(newScore));
          return newScore;
        });
        setBtnActive(correctAnswers);
        setResult(null);
        setTimeout(() => {
          navigate("/quiz/8");
        }, 3000);
      }
    }, 3000);
  };

  return (
    <div className="quiz1_container" style={{ fontSize: `${fontSize}vw` }}>
      <div className="quiz4_all_wrapper">
        <div className="quiz_title_wrapper">
          {language === "Ko" ? (
            <div className="quiz2_title_section">
              <h1>침묵의 미학</h1>
              <hr />
              <p className="quiz_question">
                만해 한용운 선생의 대표적인 시집 '님의 침묵'은 세계 여러
                나라에서 번역 되었습니다. 이 '님의 침묵'을 번역한 나라(언어)의
                이름을 모두 맞춰 보세요! 모두 선택하였으면 완료 버튼을 눌러
                주세요!
              </p>
            </div>
          ) : (
            <div className="quiz2_title_section quiz2_title_section_en">
              <h1>The Aesthetics of Silence</h1>
              <hr />
              <p className="quiz_question">
                Master Manhae Han Yong-un's representative poetry collection,
                'Silence of Nim,' has been translated into many languages around
                the world. Try to match all the countries (languages) that have
                translated 'Silence of Nim' Once you have made all the
                selections, please press the complete button.
              </p>
            </div>
          )}

          <div className="quiz_status">
            <img src={"/assets/quiz/07.png"} alt={"7 / 10"} />
          </div>
        </div>
        <div className="quiz4_section">
          <div className="quiz4_img">
            <img
              className="quiz_img"
              src={"/assets/quiz/침묵의 미학 이미지.png"}
              alt={"침묵의 미학"}
            />
          </div>
          {language === "Ko" ? (
            <div className="quiz4_btn">
              {QuizBtnList.map((item) => {
                return (
                  <button
                    value={item}
                    onClick={handleQuizBtn}
                    className={`quiz_btn_object ${
                      btnActive.includes(item) ? "active" : ""
                    }`}
                    style={{
                      backgroundImage: `url("${
                        btnActive.includes(item)
                          ? "/assets/quiz/quiz_btn_active_bg.png" // 활성화 상태일 때의 이미지
                          : "/assets/quiz/quiz_btn_bg.png" // 디폴트 이미지
                      }")`,
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="quiz4_btn">
              {QuizBtnListEn.map((item) => {
                return (
                  <button
                    value={item}
                    onClick={handleQuizBtn}
                    className={`quiz_btn_object ${
                      btnActive.includes(item) ? "active" : ""
                    }`}
                    style={{
                      backgroundImage: `url("${
                        btnActive.includes(item)
                          ? "/assets/quiz/quiz_btn_active_bg.png" // 활성화 상태일 때의 이미지
                          : "/assets/quiz/quiz_btn_bg.png" // 디폴트 이미지
                      }")`,
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="quiz4_complete_btn_wrapper">
          <div className="complete_line"></div>
          <div className="complete_btn" onClick={handleCompleteBtn}>
            <img
              src={`/assets/quiz/quiz_submit_btn_${language}.png`}
              alt={"완료버튼"}
            />
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

export default Quiz4;
