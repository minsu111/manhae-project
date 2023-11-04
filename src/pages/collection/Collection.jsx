import React, { useEffect, Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastNotification } from "../../components/common/toast/ToastNotification";
import { Spinner } from "../../components/common/spinner/Spinner";

import MainList from "../../data/Main";
import CategoryList from "../../data/Category";

import "./collection.scss";

export const Collection = () => {
  const [category, setCategory] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openToast, setOpentToast] = useState(false);

  // 다국어 처리
  const language = sessionStorage.getItem("language");
  const title = "title" + language;
  const name = "name" + language;

  // 카테고리 이벤트 핸들러
  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
    imgSectionRef.current.scrollTo(0, 0);
  };

  const imgSectionRef = useRef(null);

  useEffect(() => {
    // 디테일 페이지에서 이전버튼 눌러 되돌아올 시 시작페이지의 기존 스크롤 위치 유지
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      imgSectionRef.current.scrollTo(0, parseInt(storedScrollPosition));
      sessionStorage.removeItem("scrollPosition");
    }

    // 메인페이지에서 진입했을 시에만 토스트 알림 표시
    const menu = sessionStorage.getItem("menu");
    if (menu === "collection") {
      setOpentToast(true);
    }
    sessionStorage.removeItem("menu");
  }, []);

  // 디테일 페이지 진입 시 scrollTop 값을 세션스토리지에 저장
  const storeScrollTop = () => {
    sessionStorage.setItem("scrollPosition", scrollPosition);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div className="collection_section">
        {openToast && (
          <ToastNotification
            openToast={openToast}
            setOpentToast={setOpentToast}
          />
        )}
        <div className="category">
          {CategoryList.map((c, i) => (
            <div key={i} className="category_item">
              <label>
                <input
                  type="radio"
                  name="category"
                  id={c.code}
                  value={c.code}
                  onChange={handleCategory}
                  checked={category === c.code}
                />
                <span>{c[name]}</span>
              </label>
            </div>
          ))}
        </div>

        <section
          className="img_section"
          ref={imgSectionRef}
          onScroll={handleScroll}
        >
          {MainList.filter(
            (item) => category === 0 || category === item.category
          ).map((item, i) => (
            <div key={i} className="items">
              <div className="figure">
                <Link to={`/collection/detail/${i}`} onClick={storeScrollTop}>
                  <img
                    src={item.thumbImg}
                    alt={item[title]}
                    className="image"
                  />
                </Link>
                <div className="main_title">{item[title]}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Suspense>
  );
};
