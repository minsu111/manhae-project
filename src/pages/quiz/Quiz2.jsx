import React, { useState } from "react";

import "./quiz2.scss";

export const Quiz2 = () => {
  const [result, setResult] = useState(null);
  const [btnActive, setBtnActive] = useState("");

  const handleQuizBtn = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
    setTimeout(() => {
      e.target.value === "안중근" ? setResult("correct") : setResult("wrong");
    }, 1000);
  };

  // const answerBtnClass = result !== null ? "cliked" : "quiz2_btn";

  const BtnList = ["안중근", "김구", "유관순", "신채호"];

  return (
    <div className="quiz1_container">
      <div className="quiz1_title_section">
        <h1>뜻을 세우다</h1>
        <hr />
        <p>
          만해 한용운 선생이 지은 "안해주"라는 시는 하얼빈에서 행해진 그 분의
          의거를 기리며 지온 시입니다. 이 시를 읽어 보면서 그 분의 성함을 맞춰
          보세요!
        </p>
      </div>
      <div className="quiz2_section">
        <div className="quiz2_img">
          <img src={"/assets/original/만해2786.png"} alt={"안해주"} />
          <p>
            만 섬의 끓는 피여! 열 말의 담력이여!
            <br />
            벼르고 벼른 기상 서릿발이 시퍼렇다.
            <br />
            별안간 벼락이 치듯 천지를 뒤흔드니
            <br />
            총탄이 쏜아지는데 늠름한 그대 모습이여!
          </p>
        </div>
        <div className="quiz2_btn">
          {BtnList.map((item) => {
            return (
              <button
                value={item}
                onClick={handleQuizBtn}
                className={
                  "quiz_btn_object" + (item === btnActive ? " active" : "")
                }
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
