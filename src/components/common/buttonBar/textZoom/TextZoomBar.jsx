import React, { useEffect, useState } from "react";
import { ButtonBar } from "../ButtonBar";

const TextZoomBar = ({ textFontSize, maxFontSize, setFontSize }) => {
  const [zoomBtn, setZoomBtn] = useState({ btnType: "", status: false });
  const minFontSize = maxFontSize - 0.4;
  useEffect(() => {
    switch (zoomBtn.btnType) {
      case "+":
        let size1 = textFontSize + 0.2;
        size1 = size1 < maxFontSize ? size1 : maxFontSize;
        setFontSize(size1);
        break;
      case "-":
        let size2 = textFontSize - 0.2;
        size2 = size2 > minFontSize ? size2 : minFontSize;
        setFontSize(size2);
        break;
      default:
        break;
    }
  }, [zoomBtn.status]);

  return (
    <ButtonBar
      isZoomEnabled={true}
      setZoomBtn={setZoomBtn}
      btnToggle={zoomBtn.status}
    />
  );
};

export default TextZoomBar;
