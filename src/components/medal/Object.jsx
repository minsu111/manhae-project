// import React from "react";
// import { useDrag } from "react-dnd";

// function Object({ id, url, width }) {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "image",
//     item: { id: id },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));
//   return <img ref={drag} src={url} alt={"object"} style={{ width: "100%" }} />;
// }

// export default Object;

import React, { useState } from "react";
import { useDrag } from "react-dnd";

function Object({ id, url }) {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState({ x: 0, y: 0 });

  const [{ isDragging: isDraggingMonitor }, drag, preview] = useDrag(() => ({
    type: "image",
    item: { id: id },
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
    setDraggingPosition({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const ghostImageSize = 25;

  return (
    <>
      {isDragging && (
        <img
          src={url}
          alt={"object ghost"}
          style={{
            position: "fixed",
            top: draggingPosition.y - ghostImageSize / 2,
            left: draggingPosition.x - ghostImageSize / 2,
            opacity: 0.5,
            pointerEvents: "none",
            width: "5vw",
          }}
        />
      )}
      <img
        ref={(node) => preview(node)}
        src={url}
        alt={"object"}
        style={{ width: "100%" }}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={drag}
      />
    </>
  );
}

export default Object;
