import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuizList from "../../data/QuizKo.json";
import QuizListEn from "../../data/QuizEn.json";

import "./quizType2.scss";

const Quiz2 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");
  const [isLaodinged, setIsImageLoaded] = useState(false);

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
      image.onload = null; // Cleanup to avoid memory leaks
    };
  }, [quizItem.quizImageURL]);

  const handleQuizBtn = (e) => {
    // setBtnActive((prev) => {
    //   return e.target.value;
    // });

    if (result === null) {
      const value = e.target.value;

      setBtnActive(value);
      setTimeout(() => {
        value === quizItem.answer ? setResult("correct") : setResult("wrong");
      }, 400);

      setTimeout(() => {
        value === quizItem.answer && navigate(`/quiz/${Number(id) + 1}`);
        setBtnActive("");
        setResult(null);
      }, 3000);
    }
  };

  const quizClass =
    id === "9"
      ? "quiz_9th_desc"
      : `quiz2_img ${quizItem.description !== "" ? "withDesc_wrapper" : ""}` +
        (id === "4" ? " quiz4_desc_img" : "");

  return (
    <div className="quiz1_container">
      {isLaodinged ? (
        <div className="quiz2_all_wrapper">
          <div className="quiz_title_wrapper">
            <div className="quiz2_title_section">
              <h1>{quizItem.title}</h1>
              <hr />
              <p
                className={id === "10" ? "quiz_10th_question" : "quiz_question"}
              >
                {quizItem.question}
              </p>
            </div>
            <div className="quiz_status">
              <img
                src={`/assets/quiz/${id.padStart(2, "0")}.png`}
                alt={`${id} / 11`}
              />
            </div>
          </div>
          <div className="quiz2_section">
            <div className={quizClass}>
              <img
                className={
                  `quiz_img ${quizItem.description !== "" ? "withDesc" : ""}` +
                  (id === "4" ? " quiz4_desc_img" : "")
                }
                src={quizItem.quizImageURL}
                alt={quizItem.title}
              />
              {quizItem.description ? (
                <div
                  className={id === "4" ? " quiz4_desc_text" : "quiz_desc_text"}
                >
                  <p>{quizItem.description}</p>
                </div>
              ) : null}
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
                      (id === "6" ||
                      id === "9" ||
                      (id === "10" && language === "En") ||
                      (id === "7" && language === "En") ||
                      (id === "5" && language === "En")
                        ? " quiz_middle_btn"
                        : "") +
                      ((language === "En" && id === "9") ||
                      (language === "En" && id === "6")
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Quiz2;
