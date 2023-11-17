import React, { useEffect, useState } from "react";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quizType5.scss";
import { useNavigate, useParams } from "react-router-dom";

const Quiz5 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");

  const language = sessionStorage.getItem("language");

  const { id } = useParams();

  const quizList =
    language === "Ko"
      ? QuizList.filter((object) => object.id === "11")
      : QuizListEn.filter((object) => object.id === "11");
  const quizItem = quizList[0];

  const navigate = useNavigate();

  const handleQuizBtn = (e) => {
    if (result === null) {
      const value = e.target.value;

      setBtnActive(value);
      setTimeout(() => {
        value === quizItem.answer ? setResult("correct") : setResult("wrong");
      }, 400);

      setTimeout(() => {
        value === quizItem.answer && navigate("/");
        setBtnActive("");
        setResult(null);
      }, 3000);
    }
  };

  return (
    <div className="quiz1_container">
      <div className="quiz2_all_wrapper">
        <div className="quiz_title_wrapper">
          <div className="quiz2_title_section">
            <h1>{quizItem.title}</h1>
            <hr />
            <p className="quiz_question">{quizItem.question}</p>
          </div>
          <div className="quiz_status">
            <img src={`/assets/quiz/11.png`} alt="11 / 11" />
          </div>
        </div>
        <div className="quiz2_section">
          <div className="quiz2_img">
            <img
              className="quiz_img"
              src={quizItem.quizImageURL}
              alt={quizItem.title}
            />
            {quizItem.description ? (
              <div className="quiz5_desc_text">
                <p>{quizItem.description}</p>
              </div>
            ) : null}
          </div>
          <div className="quiz2_btn">
            {quizItem.answerBtnList.map((item) => {
              return (
                <button
                  key={item.id}
                  value={item}
                  onClick={handleQuizBtn}
                  className="quiz_btn_object"
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
    </div>
  );
};

export default Quiz5;
