import React from "react";

import "./quizType1.scss";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";

const Quiz1 = () => {
  return (
    <div className="quiz1_container">
      <div className="quiz1_title_section">
        <h1>뜻을 세우다</h1>
        <hr />
        <p>
          만해 한용운 선생이 이 책들을 보고, 인생의 참된 의미와 넓은 세상을
          이해하게 되었는데요. 설명과 그림을 각각 맞춰보세요.
        </p>
      </div>
      <div className="quiz1_content_section">
        <div className="quiz1_content_wrapper">
          <div className="quiz1_content">
            <div className="quiz1_img_wrapper">
              <div className="quiz1_img">
                <img
                  src={"/assets/thumbnail/만해2208_thumbnail.png"}
                  alt={"영환지략"}
                />
              </div>
              <div className="quiz1_img_desc">
                청나라의 서계여가 지은 책으로 세계의 지리와 문화를 소상히 설명한
                지리서
              </div>
            </div>
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
          </div>
          <div className="quiz1_content">
            <div className="quiz1_img_wrapper">
              <div className="quiz1_img">
                <img
                  src={"/assets/thumbnail/만해2528_thumbnail.png"}
                  alt={"채근담"}
                />
              </div>
              <div className="quiz1_img_desc">
                유교• 불교• 도교에서 마음 수양에 필요한 중요한 어록을 모은 심신
                수양서
              </div>
            </div>
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
          </div>
          <div className="quiz1_content">
            <div className="quiz1_img_wrapper">
              <div className="quiz1_img">
                <img src={"/assets/quiz/quiz1_img.png"} alt={"자치통감"} />
              </div>
              <div className="quiz1_img_desc">
                송나라의 사마광이 영종의 명에 따라 펴낸 중국의 편년체 역사서
              </div>
            </div>
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
          </div>
          <div className="quiz1_content">
            <div className="quiz1_img_wrapper">
              <div className="quiz1_img">
                <img
                  style={{ width: "8vw" }}
                  src={"/assets/thumbnail/만해2183_thumbnail.png"}
                  alt={"음방실문집"}
                />
              </div>
              <div className="quiz1_img_desc">
                청나라 말 근대사상가 양계초가 서양사상을 소개 및 현실을 비판한
                계몽서적
              </div>
            </div>
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
          </div>
        </div>
        <div className="quiz1_answer_wrapper">
          <div className="quiz1_answer">
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
            <div className="quiz1_answer_text">
              <img src={"/assets/image/quiz_answer_bg.png"} alt={"정답"} />
              <p>음빙실문집</p>
            </div>
          </div>
          <div className="quiz1_answer">
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
            <div className="quiz1_answer_text">
              <img src={"/assets/image/quiz_answer_bg.png"} alt={"정답"} />
              <p>영환지략</p>
            </div>
          </div>
          <div className="quiz1_answer">
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
            <div className="quiz1_answer_text">
              <img src={"/assets/image/quiz_answer_bg.png"} alt={"정답"} />
              <p>채근담</p>
            </div>
          </div>
          <div className="quiz1_answer">
            <div className="dot">
              <img src={"/assets/image/dot.png"} alt={"dot"} />
            </div>
            <div className="quiz1_answer_text">
              <img src={"/assets/image/quiz_answer_bg.png"} alt={"정답"} />
              <p>자치통감</p>
            </div>
          </div>
        </div>
      </div>
      <div className="complete_btn_wrapper">
        <div className="complete_line"></div>
        <div className="complete_btn">
          <img src={"/assets/quiz/quiz_complete_btn.png"} alt={"완료버튼"} />
        </div>
      </div>
      <div className="play_btn">
        <TTSSpeaker />
      </div>
    </div>
  );
};

export default Quiz1;
