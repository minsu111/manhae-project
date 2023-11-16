import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./quizType3.scss";

const quizList = [
  {
    quesition:
      "만해 한용운은 경상남도 합천에 위치한 해인사에서 승려의 길에 들어섰다!?",
    answer: "X",
  },
  {
    quesition:
      "1905년 1월 26일에 영제스님에 의해 수계를 받아, 득도 때의 계명은 봉완, 법명이 용운, 법호는 만해였다!?",
    answer: "O",
  },
  {
    quesition:
      "만해 한용운은 중생구제를 위한 승려교육, 포교, 경전 해석 등의 불교개혁서인 “불교대전”을 만들었다!?",
    answer: "X",
  },
  {
    quesition:
      "만해 한용운은 팔만대장경을 모두 열람하여 「조선불교유신론」을 편찬하였다!?",
    answer: "X",
  },
];

export const Quiz3 = () => {
  const [result, setResult] = useState(null);
  const [answerList, setAnswerList] = useState(
    Array(quizList.length).fill(null)
  );
  const [clickedIndex, setClickedIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const language = sessionStorage.getItem("language");

  const navigate = useNavigate();

  const handleAnswerBtn = (index, selectedAnswer) => {
    setClickedIndex(index);
    setSelectedAnswer(selectedAnswer);
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

      // setTimeout(() => {
      //   setClickedIndex(null);
      //   setSelectedAnswer(null);
      //   setButtonStyles(Array(quizList.length).fill({}));
      // }, 0);
    }
    console.log(answerList);
  }, [clickedIndex, selectedAnswer]);

  const handleCompleteBtn = () => {
    const correctAnswers = quizList.map((item) => item.answer);

    const isCorrect =
      answerList.length === correctAnswers.length &&
      answerList.every((value, index) => correctAnswers[index] === value);

    setResult(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      isCorrect ? navigate("/quiz/4") : setResult(null);
      setShowAnswer(true);
      setTimeout(() => {
        navigate("/quiz/4");
      }, 3000);
      setAnswerList(Array(quizList.length).fill(null));
      setResult(null);
    }, 3000);
  };

  setTimeout(() => {}, 3000);

  const getButtonStyle = (index) => {
    return clickedIndex === index ? { transform: "scale(1.1)" } : {};
  };

  return (
    <div className="quiz1_container ">
      <div className="quiz2_all_wrapper">
        <div className="quiz_title_wrapper">
          <div className="quiz2_title_section">
            <h1>불교인으로의 지향</h1>
            <hr />
            <p className="quiz_question">
              만해 한용운 선생의 불교에 대한 행적과 업적에 대한 내용입니다.
              <br />
              맞으면 O, 틀린 내용이면 X를 터치하세요!
            </p>
          </div>
          <div className="quiz_status">
            <img src={"/assets/quiz/03.png"} alt={"3 / 11"} />
          </div>
        </div>
        <div className="quiz3_section_wrapper">
          <div className="quiz3_section">
            {quizList.map((item, index) => (
              <div className="quiz_box" key={index}>
                <div className="quiz4_question">{item.quesition}</div>
                <div className="ox_btn_wrapper">
                  <div>
                    <button
                      onClick={() => handleAnswerBtn(index, "O")}
                      className={index === clickedIndex ? " active" : ""}
                      style={getButtonStyle(index)}
                    >
                      <img src={"/assets/quiz/oxquiz_O.png"} alt={"O"} />
                    </button>
                    <button
                      onClick={() => handleAnswerBtn(index, "X")}
                      className={index === clickedIndex ? " active" : ""}
                      style={getButtonStyle(index)}
                    >
                      <img src={"/assets/quiz/oxquiz_X.png"} alt={"X"} />
                    </button>
                  </div>
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
        <div className="showing_answer_box">
          {showAnswer && (
            <div className="showing_answer">
              {quizList.map((item, index) => (
                <img
                  src={`/assets/quiz/ox_${item.answer}.png`}
                  alt={item.answer}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
