import React from "react";
import { useDrag } from "react-dnd";

function Object({ id, url, width }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <img ref={drag} src={url} alt={"object"} width={width} />;
}

export default Object;
