import { useLocation } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

import "./layout.scss";
import { ButtonBar } from "../buttonBar/ButtonBar";

export const Layout = (props) => {
  const location = useLocation();
  const isZoomEnabled = true;

  const zoomPage =
    location.pathname.includes("/detail") ||
    location.pathname.includes("/manhaeStory") ||
    location.pathname.includes("/medal") ||
    location.pathname.includes("/quiz");

  return (
    <div className="all_container">
      {location.pathname !== "/" && <SideBar />}
      <div className="content">
        {props.children}
        {location.pathname !== "/" &&
          (zoomPage ? (
            <ButtonBar isZoomEnabled={isZoomEnabled} />
          ) : (
            <ButtonBar />
          ))}
      </div>
    </div>
  );
};
