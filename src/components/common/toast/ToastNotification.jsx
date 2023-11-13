import React, { useState, useEffect } from "react";

import "./ToastNotification.scss";

export const ToastNotification = ({ openToast, setOpentToast }) => {
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
      <img src="/assets/image/collection_toast.png" alt="토스트 안내창" />
    </div>
  );
};
