import React from "react";
import { useLocation } from "react-router-dom";

import "./sideBar.scss";

const SideBar = () => {
  const location = useLocation();

  let imageUrl = "/assets/image/sideBar1.png";
  if (location.pathname.includes("/commentary")) {
    imageUrl = "/assets/image/sideBar2.png";
  } else if (location.pathname.includes("/manhaeStory")) {
    imageUrl = "/assets/image/sideBar3.png";
  } else if (location.pathname.includes("/medal")) {
    imageUrl = "/assets/image/sideBar4.png";
  } else if (location.pathname.includes("/quiz")) {
    imageUrl = "/assets/image/sideBar5.png";
  }

  return (
    <div className="side_bar">
      <img src={imageUrl} alt={"사이드바 이미지"} />
    </div>
  );
};

export default SideBar;
