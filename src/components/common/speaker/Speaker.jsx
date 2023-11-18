import React, { useState } from "react";

const Speaker = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ paddingTop: "20%", paddingRight: "10%" }}>
      <button onClick={handleTogglePlay} style={{ all: "unset" }}>
        <img
          src={
            isPlaying
              ? "/assets/image/soundOffBtn121.png"
              : "/assets/image/soundOnBtn121.png"
          }
          alt={isPlaying ? "소리 끄기 버튼" : "소리 켜기 버튼"}
          style={{ width: "3vw" }}
        />
      </button>
    </div>
  );
};

export default Speaker;
