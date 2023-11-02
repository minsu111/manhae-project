import React from "react";
import { useLocation } from "react-router-dom";

import "./sideBar.scss";

const SideBar = () => {
  const location = useLocation();

  let imageUrl = "/assets/image/sideBar1.png";
  if (location.pathname.includes("/commentary")) {
    imageUrl = "/assets/image/sideBar2.png";
  } else if (location.pathname === "/manhaeStory") {
    imageUrl = "/assets/image/sideBar3imsi.png";
  }

  return (
    <div className="side_bar">
      <img src={imageUrl} alt={"사이드바 이미지"} className="side_bar_img" />
    </div>
  );
};

export default SideBar;
