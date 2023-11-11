import React, { useEffect, useRef, useState } from "react";
import Object from "./Object";
import { useDrop } from "react-dnd";

import ObjectList from "../../data/MedalObjects";

import "./dragDrop.scss";

function DragDrop() {
  const [medal, setMedal] = useState(null);
  const [middleRibon, setMiddleRibon] = useState(null);
  const [bottomRibon, setBottomRibon] = useState(null);
  const [extraItems, setExtraItems] = useState([]);
  const [subject, setSubject] = useState(
    "아래 버튼을 눌러 주제를 선택해주세요."
  );
  const [subjectCliked, setSubjectClicked] = useState(false);

  // const [position, setPosition] = useState({ left: 0, top: 0 });

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => addImageToBoard(item.id, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [lastDraggedPosition, setLastDraggedPosition] = useState({});

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
        setExtraItems((board) => [
          ...board,
          { ...item, ...lastDraggedPosition[id] },
        ]);
        break;
      default:
        break;
    }
  };

  const handleSubjectBtn = (e) => {
    setSubject(e.target.value + " 훈장 만들기");
    // setSubjectClicked(true);
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
        <div className="boards" ref={drop}>
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
              <Object url={medal.url} id={medal.id} width={medal.width} />
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
              <Object
                url={bottomRibon.url}
                id={bottomRibon.id}
                width={`${bottomRibon.width}%`}
              />
            </div>
          )}
          {extraItems.map((object) => {
            return (
              <div
                key={object.id}
                style={{
                  position: "absolute",
                  left: `${object.left}%`,
                  top: `${object.top}%`,
                  zIndex: "4",
                }}
              >
                <Object
                  url={object.url}
                  id={object.id}
                  width={`${object.width}%`}
                />
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
        <div className="refresh_btn" onClick={() => {}}>
          <img src={"/assets/medal/refresh_btn.png"} alt={"다시 만들기"} />
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
