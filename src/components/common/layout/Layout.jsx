import { useLocation } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

import "./layout.scss";
import { ButtonBar } from "../buttonBar/ButtonBar";

export const Layout = (props) => {
  const location = useLocation();
  const isZoomEnabled = true;

  const zoomPage = location.pathname.includes("/detail");

  return (
    <div className="all_container">
      {location.pathname !== "/" && <SideBar />}
      <div className="content">
        <main>{props.children}</main>
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
