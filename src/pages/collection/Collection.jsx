import React, { useEffect, Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainList from "../../data/Main";
import CategoryList from "../../data/Category";

import "./collection.scss";
import { ToastNotification } from "../../components/common/toast/ToastNotification";
import { Spinner } from "../../components/common/spinner/Spinner";

export const Collection = () => {
  const [category, setCategory] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openToast, setOpentToast] = useState(false);

  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
    imgSectionRef.current.scrollTo(0, 0);
  };

  const imgSectionRef = useRef(null);

  useEffect(() => {
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      imgSectionRef.current.scrollTo(0, parseInt(storedScrollPosition));
      sessionStorage.removeItem("scrollPosition");
    }

    const menu = sessionStorage.getItem("menu");
    if (menu) {
      setOpentToast(true);
      sessionStorage.removeItem("menu");
    }
  }, []);

  const storeScrollTop = () => {
    sessionStorage.setItem("scrollPosition", scrollPosition);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <React.Suspense fallback={<Spinner />}>
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
                <span>{c.name}</span>
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
                  <img src={item.thumbImg} alt={"소장품"} className="image" />
                </Link>
                <div className="main_title">{item.title}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </React.Suspense>
  );
};
