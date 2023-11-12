import React, { useEffect, useRef, useState } from "react";
import Object from "./Object";
import { useDrop } from "react-dnd";

import ObjectList from "../../data/MedalObjects";

import "./makingMedal.scss";

function DragDrop() {
  const [medal, setMedal] = useState(null);
  const [middleRibon, setMiddleRibon] = useState(null);
  const [bottomRibon, setBottomRibon] = useState(null);
  const [extraItems, setExtraItems] = useState([]);
  const [subject, setSubject] = useState(
    "아래 버튼을 눌러 주제를 선택해주세요."
  );

  // const [position, setPosition] = useState({ left: 0, top: 0 });

  const [, drop] = useDrop(() => ({
    accept: "image",
    //canDrop: (item, monitor) => canDropImageToBoard(item.id, monitor),
    drop: (item, monitor) => addImageToBoard(item.id, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // const canDropImageToBoard = (id, monitor) => {
  //   var location = monitor.getSourceClientOffset();
  //   console.log(location);
  //   if (location.x < 1000 || location.x > 2000) {
  //     return false;
  //   } else if (location.y < 400 || location.y > 800) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const addImageToBoard = (id, monitor) => {
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
              if (id === object.id) {
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
              index: prevExtraItems.length,
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
    setSubject(e.target.value + " 훈장 만들기");
  };

  return (
    <div className="making_medal_container">
      <div className="left_section">
        <div className="making_description">
          <h1>나만의 훈장 만들기</h1>
          <hr />
          <p>
            대한민국 훈장과 만해 한용운 선생님의 훈장을 참고하여 나만의 훈장을
            만들어볼까요? 오른쪽 네모 박스에 원하는 요소들을 가져와서 나만의
            훈장을 완성한 후, 사진을 찍어 가족, 친구들과 공유해보세요!
          </p>
        </div>
        <div className="objects_wrapper">
          <div className="objects1">
            {ObjectList.map((object) => {
              return (
                object.groupId === 1 && (
                  <span className="medal_objects_group1">
                    <Object url={object.url} id={object.id} width={"15%"} />
                  </span>
                )
              );
            })}
          </div>
          <hr />
          <div className="objects2">
            {ObjectList.map((object) => {
              return (
                object.groupId === 2 && (
                  <span className="medal_objects_group2">
                    <Object url={object.url} id={object.id} width={"15%"} />
                  </span>
                )
              );
            })}
          </div>
          <div className="objects3">
            {ObjectList.map((object) => {
              return (
                object.groupId === 3 && (
                  <span className="medal_objects_group3">
                    <Object url={object.url} id={object.id} width={"7%"} />
                  </span>
                )
              );
            })}
          </div>
          <hr />
          <div className="objects4">
            {ObjectList.map((object) => {
              return (
                object.groupId === 4 && (
                  <span className="medal_objects_group4">
                    <Object url={object.url} id={object.id} width={"5%"} />
                  </span>
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
        <div className="boards" id="imagebox" ref={drop}>
          <div className="board_title">
            <p>{subject}</p>
          </div>
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
              <Object url={medal.url} id={medal.id} />
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
              <Object url={middleRibon.url} id={middleRibon.id} />
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
              <Object url={bottomRibon.url} id={bottomRibon.id} />
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
                <Object url={object.url} id={object.id} />
              </div>
            );
          })}

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
  );
}

export default DragDrop;
