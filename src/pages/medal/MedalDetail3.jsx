import React from "react";
import { Link } from "react-router-dom";

import "./medalDetail3.scss";

const MedalDetail3 = () => {
  const language = sessionStorage.getItem("language");

  return (
    <div className="medal_detail3_container">
      {language === "Ko" ? (
        <div className="detail3_section_wrapper">
          <div className="detail3_left_section">
            <div className="medal_detail3_seciton first_section">
              <h2>건국훈장 ‒ 독립장(Independence Medal)</h2>
              <hr className="dividing_line" />
              <p>
                건국훈장에서 3등급인 독립장에는 여성독립운동가 김 마리아, 윤동주
                시인, 우당 김희영, 제암리 사건을 전 세계에 알린 스코필드
                박사등의 위인분들이 수여 받았습니다.
              </p>
              <div className="detail3_desc_img_1">
                <img src={"/assets/medal/medal_detail3_1.png"} alt={"독립장"} />
              </div>
            </div>
          </div>
          <div className="detail3_right_section">
            <div className="medal_detail3_seciton">
              <h2>건국훈장 ‒ 애국장(Patriotic Medal)</h2>
              <hr className="dividing_line" />
              <p>
                건국훈장에서 4등급인 애국장에는 재야 대통령 장준하, 저항시인
                이육사, 송몽규 등의 위인분들이 수여 받았습니다.
              </p>
              <div className="detail3_desc_img_2">
                <img src={"/assets/medal/medal_detail3_2.png"} alt={"독립장"} />
              </div>
            </div>
            <div className="medal_detail3_seciton detail3_section3">
              <h2>건국훈장 ‒ 애족장(National Medal)</h2>
              <hr className="dividing_line" />
              <p>
                건국훈장에서 5등급인 애족장에는 후세다쓰지, 여성 계몽을 이끈
                차미리사 여사 등의 위인분들이 수여 받았습니다.
              </p>
              <div className="detail3_desc_img_2">
                <img src={"/assets/medal/medal_detail3_2.png"} alt={"독립장"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="detail3_section_wrapper">
          <div className="detail3_left_section">
            <div className="medal_detail3_seciton first_section">
              <h2>
                Order of Merit for National Foundation - Independence Medal
              </h2>
              <hr className="dividing_line" />
              <p>
                The Independence Medal, which is the third grade in the Order of
                Merit for National Foundation, has been awarded to prominent
                individuals including female independence activist Kim Maria,
                poet Yun Dong-ju, U-dang Kim Hee-young, and Dr. Schofield, who
                brought the Jeam-ri massacre to the world's attention.
              </p>
              <div className="detail3_desc_img_1">
                <img src={"/assets/medal/medal_detail3_1.png"} alt={"독립장"} />
              </div>
            </div>
          </div>
          <div className="detail3_right_section">
            <div className="medal_detail3_seciton">
              <h2>Order of Merit for National Foundation - Patriotic Medal</h2>
              <hr className="dividing_line" />
              <p>
                The Patriotic Medal, which is the fourth grade in the Order of
                Merit for National Foundation, has been awarded to distinguished
                individuals such as Jang Jun-ha, known as the "President in the
                Field," resistance poet Yi Yuk-sa, and Song Mong-gyu.
              </p>
              <div className="detail3_desc_img_2">
                <img src={"/assets/medal/medal_detail3_2.png"} alt={"독립장"} />
              </div>
            </div>
            <div className="medal_detail3_seciton detail3_section3 ">
              <h2>Order of Merit for National Foundation - National Medal</h2>
              <hr className="dividing_line" />
              <p>
                The National Medal, which is the fifth grade in the Order of
                Merit for National Foundation, has been awarded to notable
                individuals including Fusetsu Nakamura, and Madam Cha Mirisa,
                who led the enlightenment for women.
              </p>
              <div className="detail3_desc_img_2">
                <img src={"/assets/medal/medal_detail3_2.png"} alt={"독립장"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedalDetail3;
