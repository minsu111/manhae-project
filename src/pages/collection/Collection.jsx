import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainList from "../../data/Main";
import CategoryList from "../../data/Category";

import "./collection.scss";

export const Collection = () => {
  const [category, setCategory] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
  };

  const imgSectionRef = useRef(null);

  useEffect(() => {
    // 페이지 로드 시 스크롤 위치를 복원
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      imgSectionRef.current.scrollTo(0, parseInt(storedScrollPosition));
    }

    // 페이지 언마운트 시 스크롤 위치를 저장
    // return () => {
    //   sessionStorage.setItem("scrollPosition", scrollPosition);
    // };
  }, []);

  const storeScrollTop = () => {
    sessionStorage.setItem("scrollPosition", scrollPosition);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <div className="collection_section">
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
  );
};
