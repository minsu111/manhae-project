import React, { useState } from "react";
import { useDrag } from "react-dnd";
import ObjectList from "../../data/MedalObjects";

function Object({ medalItem }) {
  const id = medalItem.id;
  const url = medalItem.url;
  const index = medalItem.index || 0;
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState({ x: 0, y: 0 });
  // const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const objectList = ObjectList.filter((object) => id === object.id);
  const ghostImageSize = objectList[0].width;

  const [{ isDragging: isDraggingMonitor }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, index: index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleTouchMove = (e) => {
    if (!isDraggingMonitor) {
      return;
    }

    const touch = e.touches[0];
    const { clientX, clientY } = touch;

    setDraggingPosition({
      x: clientX,
      y: clientY,
    });
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      {isDragging && (
        <img
          src={url}
          alt={"object ghost"}
          style={{
            position: "fixed",
            top: `calc(${draggingPosition.y}px - ${ghostImageSize / 2}vw)`,
            left: `calc(${draggingPosition.x}px - ${ghostImageSize / 2}vw)`,
            opacity: index ? 1 : 0.5,
            pointerEvents: "none",
            width: `${ghostImageSize}vw`,
            zIndex: 10,
          }}
        />
      )}

      <img
        src={url}
        alt={"object"}
        style={{ width: "100%", opacity: isDragging && index !== 0 ? 0 : 1 }}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={drag}
      />
    </>
  );
}

export default Object;
