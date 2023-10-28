import { useLocation } from "react-router-dom";
import SideBar from "../sideBar/SideBar";

import "./layout.scss";

export const Layout = (props) => {
  const location = useLocation();

  return (
    <div className="wrap">
      {location.pathname !== "/" && <SideBar />}
      <div className="content">
        <main>{props.children}</main>
      </div>
    </div>
  );
};
