import React, { useEffect, useState } from "react";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quiz2.scss";
import { useNavigate, useParams } from "react-router-dom";

export const Quiz2 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");

  const { id } = useParams();
  // 다국어 처리
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
    setBtnActive(e.target.value);
    setTimeout(() => {
      e.target.value === quizItem.answer
        ? setResult("correct")
        : setResult("wrong");
    }, 500);

    setTimeout(() => {
      e.target.value === quizItem.answer
        ? navigate(`/quiz/${Number(id) + 1}`)
        : setResult(null);
      setBtnActive("");
    }, 3000);
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
        <div className="quiz2_img">
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
                  "quiz_btn_object" + (item === btnActive ? " active" : "")
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
