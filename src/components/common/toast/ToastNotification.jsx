import React, { useState, useEffect } from "react";

import "./ToastNotification.scss";

export const ToastNotification = ({ openToast, setOpentToast }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setOpentToast(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toastClasses = `toast_alert ${openToast ? "show" : ""}`;
  return (
    <div className={toastClasses}>
      <img
        src="/assets/image/소장품감상 시작페이지 중앙.png"
        alt="토스트 안내창"
      />
    </div>
  );
};
