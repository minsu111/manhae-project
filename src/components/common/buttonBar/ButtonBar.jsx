import React, { useNavigate } from "react-router-dom";

import "./buttonBar.scss";

export const ButtonBar = ({ isZoomEnabled, isModal, setZoomBtn }) => {
  const navigate = useNavigate();

  const btnBarClasses = `${
    isZoomEnabled ? "full_btn_bar_wrapper" : "short_btn_bar_wrapper"
  }`;

  return (
    <div className={btnBarClasses}>
      <div className="btn_bar">
        <button onClick={() => navigate("/")}>
          <img src={"/assets/image/icon-home.png"} alt={"홈버튼"} />
        </button>
        <button onClick={() => navigate(-1)}>
          <img src={"/assets/image/icon-backward.png"} alt={"이전버튼"} />
        </button>
        {isModal && (
          <button onClick={() => navigate(-1)}>
            <img src={"/assets/image/icon-backward.png"} alt={"이전버튼"} />
          </button>
        )}

        {isZoomEnabled && (
          <>
            <button onClick={() => setZoomBtn("+")}>
              <img
                src={"/assets/image/plus_icon01 77x67.png"}
                alt={"확대버튼"}
              />
            </button>
            <button onClick={() => setZoomBtn("-")}>
              <img
                src={"/assets/image/minus_icon01 77x67.png"}
                alt={"축소버튼"}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
