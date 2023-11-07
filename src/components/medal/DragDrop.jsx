import React, { useState } from "react";
import Object from "./Object";
import { useDrop } from "react-dnd";

import "./dragDrop.scss";

const ObjectList = [
  {
    id: 1,
    url: "/assets/medal/medal_1.png",
    location: "",
    groupId: 1,
  },
  {
    id: 7,
    url: "/assets/medal/medal_2.png",
    groupId: 1,
  },
  {
    id: 2,
    url: "/assets/medal/medal_2.png",
    groupId: 2,
  },
  {
    id: 3,
    url: "/assets/medal/medal_3.png",
    groupId: 3,
  },
  {
    id: 4,
    url: "/assets/medal/medal_4.png",
    groupId: 4,
  },
];

function DragDrop() {
  const [medal, setMedal] = useState(null);
  const [middleRibon, setMiddleRibon] = useState(null);
  const [bottomRibon, setBottomRibon] = useState(null);
  const [extraItems, setExtraItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const objectList = ObjectList.filter((object) => id === object.id);
    //setBoard((board) => [...board, objectList[0]]);
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
        setExtraItems((board) => [...board, item]);
        break;
      default:
        break;
    }
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
          <div className="objects">
            {ObjectList.map((object) => {
              return (
                object.groupId === 1 && (
                  <Object url={object.url} id={object.id} width={"10%"} />
                )
              );
            })}
          </div>
          <hr />
          <div className="objects">
            {ObjectList.map((object) => {
              return (
                object.groupId === 2 && (
                  <Object url={object.url} id={object.id} width={"10%"} />
                )
              );
            })}
          </div>
          <div className="objects">
            {ObjectList.map((object) => {
              return (
                object.groupId === 3 && (
                  <Object url={object.url} id={object.id} width={"10%"} />
                )
              );
            })}
          </div>
          <hr />
          <div className="objects">
            {ObjectList.map((object) => {
              return (
                object.groupId === 4 && (
                  <Object url={object.url} id={object.id} width={"10%"} />
                )
              );
            })}
          </div>
        </div>
      </div>
      <div className="right_section">
        <div className="boards" ref={drop}>
          {medal !== null && (
            <div style={{ position: "absolute", top: "50%", left: "10%" }}>
              <Object url={medal.url} id={medal.id} width={"40%"} />
            </div>
          )}
          {middleRibon !== null && (
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "20%",
                zIndex: "11",
              }}
            >
              <Object url={middleRibon.url} id={middleRibon.id} width={"40%"} />
            </div>
          )}
          {bottomRibon !== null && (
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "30%",
                width: "20%",
                zIndex: "12",
              }}
            >
              <Object url={bottomRibon.url} id={bottomRibon.id} />
            </div>
          )}
          {extraItems.map((object) => {
            return (
              <div style={{ position: "relative", top: "30%", left: "40%" }}>
                <Object url={object.url} id={object.id} width={"20%"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
