import React from "react";
import { useLocation } from "react-router-dom";

import "./sideBar.scss";

const SideBar = () => {
  const location = useLocation();

  const language = sessionStorage.getItem("language");

  let imageUrl = `/assets/image/sideBar1_${language}.png`;
  if (location.pathname.includes("/commentary")) {
    imageUrl = `/assets/image/sideBar2_${language}.png`;
  } else if (location.pathname.includes("/manhaeStory")) {
    imageUrl = `/assets/image/sideBar3_${language}.png`;
  } else if (location.pathname.includes("/medal")) {
    imageUrl = `/assets/image/sideBar4_${language}.png`;
  } else if (location.pathname.includes("/quiz")) {
    imageUrl = `/assets/image/sideBar2_${language}.png`;
  }

  return (
    <div className="side_bar">
      <img src={imageUrl} alt={"사이드바 이미지"} />
    </div>
  );
};

export default SideBar;
