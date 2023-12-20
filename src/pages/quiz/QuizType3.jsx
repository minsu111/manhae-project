import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";
import TextZoomBar from "../../components/common/buttonBar/textZoom/TextZoomBar";
import correctAudio from "../../audio/correct.wav";
import wrongAudio from "../../audio/wrong.wav";

import "./quizType3.scss";

const quizList = [
  {
    questionKo:
      "만해 한용운은 경상남도 합천에 위치한 해인사에서 승려의 길에 들어섰다!?",
    questionEn:
      "Manhae Han Yong-un entered the path of a monk at Haeinsa Temple, located in Hapcheon, Gyeongsangnam-do!",
    answer: "X",
  },
  {
    questionKo:
      "1905년 1월 26일에 영제스님에 의해 수계를 받아, 득도 때의 계명은 봉완, 법명이 용운, 법호는 만해였다!?",
    questionEn:
      "On January 26, 1905, he received his precepts from Master Yeongje, with his enlightenment name being Bongwan, his Dharma name Yong-un, and his Dharma title Manhae!",
    answer: "O",
  },
  {
    questionKo:
      "만해 한용운은 중생구제를 위한 승려교육, 포교, 경전 해석 등의 불교개혁서인 “불교대전”을 만들었다!?",
    questionEn:
      "Manhae Han Yong-un created the 'Buddhist Bible,' a reformist Buddhist text for the education of monks, propagation, and interpretation of scriptures for the salvation of sentient beings!",
    answer: "X",
  },
  {
    questionKo:
      "만해 한용운은 팔만대장경을 모두 열람하여 「조선불교유신론」을 편찬하였다!?",
    questionEn:
      "Manhae Han Yong-un reviewed the entire Tripitaka Koreana and compiled the ‘The Restoration of Korean Buddhism'!",
    answer: "X",
  },
];

const Quiz3 = () => {
  const [result, setResult] = useState(null);
  const [answerList, setAnswerList] = useState(
    Array(quizList.length).fill(null)
  );

  const [clickedIndex, setClickedIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  const language = sessionStorage.getItem("language");
  const question = "question" + language;

  const navigate = useNavigate();

  // OX 버튼 핸들러
  const handleAnswerBtn = (index, selectedAnswer, e) => {
    setClickedIndex(index);
    setSelectedAnswer(selectedAnswer);

    let prevImgId = e.currentTarget.id.indexOf("btnO") !== -1 ? "btnX" : "btnO";
    prevImgId += index;
    document.getElementById(prevImgId).style.backgroundColor = "";
    document.getElementById(e.currentTarget.id).style.backgroundColor =
      "#eccd8ec3";
  };

  // 추가: 스케일이 변경된 후에 초기화
  useEffect(() => {
    if (clickedIndex !== null && selectedAnswer !== null) {
      setAnswerList((prevBtnActive) => {
        const newBtnActive = [...prevBtnActive];
        newBtnActive[clickedIndex] = selectedAnswer;
        return newBtnActive;
      });

      setClickedIndex(null);
      setSelectedAnswer(null);
    }
  }, [clickedIndex, selectedAnswer]);

  const handleCompleteBtn = () => {
    const correctAnswers = quizList.map((item) => item.answer);

    const isCorrect =
      answerList.length === correctAnswers.length &&
      answerList.every((value, index) => correctAnswers[index] === value);

    const currentScore = Number(sessionStorage.getItem("score"));
    isCorrect
      ? sessionStorage.setItem("score", currentScore + 1)
      : sessionStorage.setItem("score", currentScore);

    setResult(isCorrect ? "correct" : "wrong");

    const newAudio = new Audio(isCorrect ? correctAudio : wrongAudio);
    newAudio.play();

    setTimeout(() => {
      if (isCorrect) {
        navigate("/quiz/3");
      } else {
        setResult(null);
        setShowAnswer(true);
        setTimeout(() => {
          navigate("/quiz/3");
        }, 3500);
        setAnswerList(Array(quizList.length).fill(null));
        setResult(null);
      }
    }, 1500);
  };

  return (
    <div className="quiz1_container" style={{ fontSize: `${fontSize}vw` }}>
      <div className="quiz2_all_wrapper">
        <div className="quiz_title_wrapper">
          {language === "Ko" ? (
            <div className="quiz2_title_section">
              <h1>불교인으로의 지향</h1>
              <hr />
              <p className="quiz_question">
                만해 한용운 선생의 불교에 대한 행적과 업적에 대한 내용입니다.
                <br />
                맞으면 O, 틀린 내용이면 X를 터치하세요!
              </p>
            </div>
          ) : (
            <div className="quiz2_title_section">
              <h1>Orientation as a Buddhist</h1>
              <hr />
              <p className="quiz_question">
                This is about Master Manhae Han Yong-un's actions and
                achievements related to Buddhism. If it's correct, touch O; if
                it's wrong, touch X !
              </p>
            </div>
          )}

          <div className="quiz_status">
            <img src={"/assets/quiz/02.png"} alt={"2 / 11"} />
          </div>
        </div>
        <div className="quiz3_section_wrapper">
          <div className="quiz3_section">
            {quizList.map((item, index) => (
              <div className="quiz_box" key={index}>
                <div
                  className="quiz4_question"
                  style={{ paddingTop: language === "En" && "4%" }}
                >
                  {item[question]}
                </div>
                <div className="ox_btn_wrapper">
                  <button
                    onClick={(e) => handleAnswerBtn(index, "O", e)}
                    id={`btnO${index}`}
                  >
                    <img src={"/assets/quiz/oxquiz_O.png"} alt={"O"} />
                  </button>
                  <button
                    onClick={(e) => handleAnswerBtn(index, "X", e)}
                    id={`btnX${index}`}
                  >
                    <img src={"/assets/quiz/oxquiz_X.png"} alt={"X"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="quiz3_complete_btn_wrapper">
          <div className="complete_line"></div>
          <div className="complete_btn" onClick={handleCompleteBtn}>
            <img src={"/assets/quiz/quiz_complete_btn.png"} alt={"완료버튼"} />
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
        {showAnswer && (
          <div className="showing_answer_box">
            <div className="showing_answer">
              {quizList.map((item, index) => (
                <img
                  src={`/assets/quiz/ox_${item.answer}.png`}
                  alt={item.answer}
                  key={index}
                />
              ))}
            </div>{" "}
          </div>
        )}
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

export default Quiz3;
