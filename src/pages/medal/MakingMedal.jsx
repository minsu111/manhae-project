import React, { useState } from "react";
import { useDrop } from "react-dnd";

import ObjectList from "../../data/MedalObjects";

import "./makingMedal.scss";
import Object from "../../components/medal/Object";

export const MakingMedal = () => {
  const [medal, setMedal] = useState(null);
  const [middleRibon, setMiddleRibon] = useState(null);
  const [bottomRibon, setBottomRibon] = useState(null);
  const [extraItems, setExtraItems] = useState([]);

  // 다국어 처리
  const language = sessionStorage.getItem("language");

  const [subject, setSubject] = useState(
    language === "Ko"
      ? "아래 버튼을 눌러 주제를 선택해주세요."
      : "Please press the button below\nto select a topic."
  );

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (medalItem, monitor) => addImageToBoard(medalItem, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (medalItem, monitor) => {
    const id = medalItem.id;
    const index = medalItem.index;
    const objectList = ObjectList.filter((object) => id === object.id);
    const item = objectList[0];

    switch (item.groupId) {
      case 1:
        setMedal(item);
        break;
      case 2:
        setMiddleRibon(item);
        break;
      case 3:
        setBottomRibon(item);
        break;
      case 4:
        const imageboxPos = document
          .getElementById("imagebox")
          .getBoundingClientRect();
        const dragStartPos = monitor.getInitialClientOffset();
        const itemPos = monitor.getClientOffset();
        if (imageboxPos.x < dragStartPos.x && imageboxPos.y < dragStartPos.y) {
          // 박스안에서 드래그시작일 경우 기존 아이템 유지
          setExtraItems((prevExtraItems) => {
            const updatedItems = prevExtraItems.map((object) => {
              if (id === object.id && index === object.index) {
                return {
                  ...object,
                  left: itemPos.x - imageboxPos.x,
                  top: itemPos.y - imageboxPos.y,
                };
              }
              return object;
            });
            return updatedItems;
          });
        } else {
          // 새로운 아이템 추가
          setExtraItems((prevExtraItems) => [
            ...prevExtraItems,
            {
              ...item,
              index: prevExtraItems.length + 1,
              left: itemPos.x - imageboxPos.x,
              top: itemPos.y - imageboxPos.y,
            },
          ]);
        }

        break;
      default:
        break;
    }
  };

  const handleSubjectBtn = (e) => {
    language === "Ko"
      ? setSubject(e.target.value + " 훈장 만들기")
      : setSubject(e.target.value + " text");
  };

  return (
    <div className="making_medal_container">
      <div className="making_medal_section_wrapper">
        <div className="left_section">
          {language === "Ko" ? (
            <div className="making_description">
              <h1>나만의 훈장 만들기</h1>
              <hr />
              <p>
                대한민국 훈장과 만해 한용운 선생님의 훈장을 참고하여 나만의
                훈장을 만들어볼까요? 오른쪽 네모 박스에 원하는 요소들을 가져와서
                나만의 훈장을 완성한 후, 사진을 찍어 가족, 친구들과
                공유해보세요!
              </p>
            </div>
          ) : (
            <div className="making_description">
              <h1>Create Your Own Medal!</h1>
              <hr />
              <p>
                Let’s create our own medals referring to the Orders of the
                Republic of Korea and the medals of Master Manhae Han Yong-un!
                Bring the elements you want into the right square box to
                complete your own medal, then take a picture and share it with
                your family and friends!
              </p>
            </div>
          )}

          <div className="objects_wrapper">
            <div className="objects1">
              {ObjectList.map((object) => {
                return (
                  object.groupId === 1 && (
                    <div className="medal_objects_group1">
                      <Object medalItem={object} />
                    </div>
                  )
                );
              })}
            </div>
            <hr />
            <div className="objects2">
              {ObjectList.map((object) => {
                return (
                  object.groupId === 2 && (
                    <div className="medal_objects_group2">
                      <Object medalItem={object} />
                    </div>
                  )
                );
              })}
            </div>
            <div className="objects3">
              {ObjectList.map((object) => {
                return (
                  object.groupId === 3 && (
                    <div className="medal_objects_group3">
                      <Object medalItem={object} />
                    </div>
                  )
                );
              })}
            </div>
            <hr />
            <div className="objects4">
              {ObjectList.map((object) => {
                return (
                  object.groupId === 4 && (
                    <div className="medal_objects_group4">
                      <Object medalItem={object} />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        {/* board 섹션 */}
        <div className="right_section">
          <div className="board_top_object">
            <img
              src={"/assets/medal/medal_board_object.png"}
              alt={"훈장 만들기 보드"}
            />
          </div>
          <div className="boards" id="imagebox">
            <div className="board_title">
              <p>{subject}</p>
            </div>
            <div className="drop_section" ref={drop}>
              {medal !== null && (
                <div
                  style={{
                    position: "absolute",
                    top: `${medal.top}vh`,
                    left: `${medal.left}vw`,
                    width: `${medal.width}vw`,
                    zIndex: "3",
                  }}
                >
                  <Object medalItem={medal} />
                </div>
              )}
              {middleRibon !== null && (
                <div
                  style={{
                    position: "absolute",
                    top: `${middleRibon.top}%`,
                    left: `${middleRibon.left}%`,
                    width: `${middleRibon.width}vw`,
                  }}
                >
                  <Object medalItem={middleRibon} />
                </div>
              )}
              {bottomRibon !== null && (
                <div
                  style={{
                    position: "absolute",
                    top: `${bottomRibon.top}%`,
                    left: `${bottomRibon.left}%`,
                    width: `${bottomRibon.width}vw`,
                    zIndex: "2",
                  }}
                >
                  <Object medalItem={bottomRibon} />
                </div>
              )}
              {extraItems.map((object) => {
                return (
                  <div
                    key={object.id}
                    style={{
                      position: "absolute",
                      left: `calc(${object.left}px - ${object.width / 2}vw)`,
                      top: `calc(${object.top}px - ${object.width / 2}vw)`,
                      width: `${object.width}vw`,
                      zIndex: "4",
                    }}
                  >
                    <Object medalItem={object} />
                  </div>
                );
              })}
            </div>
            {language === "Ko" ? (
              <div className="medal_btn_section">
                <input
                  type="button"
                  className={`${subject.includes("애국심") && "double_height"}`}
                  value="애국심"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("건강") && "double_height"}`}
                  value="건강"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("정직") && "double_height"}`}
                  value="정직"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("성실") && "double_height"}`}
                  value="성실"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("효도") && "double_height"}`}
                  value="효도"
                  onClick={handleSubjectBtn}
                />
              </div>
            ) : (
              <div className="medal_btn_section">
                <input
                  type="button"
                  className={`${subject.includes("애국심") && "double_height"}`}
                  value="btn1"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("건강") && "double_height"}`}
                  value="btn2"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("정직") && "double_height"}`}
                  value="btn3"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("성실") && "double_height"}`}
                  value="btn4"
                  onClick={handleSubjectBtn}
                />
                <input
                  type="button"
                  className={`${subject.includes("효도") && "double_height"}`}
                  value="btn5"
                  onClick={handleSubjectBtn}
                />
              </div>
            )}
          </div>
          <div
            className="refresh_btn"
            onClick={() => {
              setMedal(null);
              setMiddleRibon(null);
              setBottomRibon(null);
              setExtraItems([]);
            }}
          >
            <img src={"/assets/medal/refresh_btn.png"} alt={"다시 만들기"} />
          </div>
        </div>
      </div>
    </div>
  );
};
