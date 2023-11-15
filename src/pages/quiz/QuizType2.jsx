import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quizType2.scss";

export const Quiz2 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");

  const { id } = useParams();

  const language = sessionStorage.getItem("language");

  const quizList =
    language === "Ko"
      ? QuizList.filter((object) => id === object.id)
      : QuizListEn.filter((object) => id === object.id);
  const quizItem = quizList[0];

  const navigate = useNavigate();

  const handleQuizBtn = (e) => {
    // setBtnActive((prev) => {
    //   return e.target.value;
    // });

    if (result === null) {
      const value = e.target.value;

      setBtnActive(value);
      setTimeout(() => {
        value === quizItem.answer ? setResult("correct") : setResult("wrong");
      }, 500);

      setTimeout(() => {
        value === quizItem.answer && navigate(`/quiz/${Number(id) + 1}`);
        setBtnActive("");
        setResult(null);
      }, 3000);
    }
  };

  return (
    <div className="quiz1_container">
      <div className="quiz_title_wrapper">
        <div className="quiz2_title_section">
          <h1>{quizItem.title}</h1>
          <hr />
          <p>{quizItem.question}</p>
        </div>
      </div>
      <div className="quiz2_section">
        <div
          className={`quiz2_img ${
            quizItem.description !== "" ? "withDesc_wrapper" : ""
          }`}
        >
          <img
            className={`quiz_img ${
              quizItem.description !== "" ? "withDesc" : ""
            }`}
            src={quizItem.quizImageURL}
            alt={quizItem.title}
          />
          {quizItem.description ? <p>{quizItem.description}</p> : null}
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
                  (id === "6" ? " quiz6_btn" : "")
                }
                style={{
                  backgroundImage: `url("${
                    item === btnActive
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
  );
};
