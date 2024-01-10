import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

import "./ToastNotification.scss";

export const ToastNotification = ({ openToast, setOpentToast }) => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      setOpentToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setOpentToast]);

  const toastClasses = `toast_alert ${openToast ? "show" : ""}`;
  return (
    <div className={toastClasses}>
      <img
        src={`/assets/image/collection_toast_${language}.png`}
        alt="토스트 안내창"
      />
    </div>
  );
};
