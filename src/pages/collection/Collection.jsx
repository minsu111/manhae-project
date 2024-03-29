import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { ToastNotification } from "../../components/common/toast/ToastNotification";
import TTSSpeaker from "../../components/common/speaker/TTSSpeaker";

import CollectionList from "../../data/Collection";
import CategoryList from "../../data/Category";

import "./collection.scss";

const Collection = () => {
  const storedCategory = sessionStorage.getItem("category");

  const [category, setCategory] = useState(
    storedCategory ? storedCategory * 1 : 1
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openToast, setOpentToast] = useState(false);

  const navigate = useNavigate();

  // 다국어 처리
  const { language } = useContext(LanguageContext);
  const title = "title" + language;
  const name = "name" + language;

  // 카테고리 이벤트 핸들러
  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
    imgSectionRef.current.scrollTo(0, 0);
    sessionStorage.setItem("category", selectedCategory);
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

    storedCategory && setCategory(storedCategory * 1);
  }, [storedCategory]);

  // 디테일 페이지 진입 시 scrollTop 값을 세션스토리지에 저장
  const storeScrollTop = () => {
    sessionStorage.setItem("scrollPosition", scrollPosition);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
    console.log(e);
  };

  const categoryClass = ` category ${language === "Ko" ? "category_ko" : ""}`;

  const categoryItemClass =
    language === "Ko" ? "category_item_ko" : "category_item_en";

  return (
    <div className="collection_section">
      {openToast && (
        <ToastNotification
          openToast={openToast}
          setOpentToast={setOpentToast}
        />
      )}
      {/* 카테고리 영역 */}
      <div className={categoryClass}>
        {CategoryList.map((c, i) => (
          <div key={i} className={categoryItemClass}>
            <label>
              <input
                type="radio"
                name="category"
                id={c.code}
                value={c.code}
                onChange={handleCategory}
                checked={category === c.code}
              />
              <span className="category_name">{c[name]}</span>
            </label>
          </div>
        ))}
      </div>

      <section
        className="img_section"
        ref={imgSectionRef}
        onScroll={handleScroll}
      >
        {CollectionList.filter(
          (item) => category === 0 || category === item.category
        ).map((item, i) => (
          <div key={i} className="items">
            <div
              onClick={() => {
                navigate(`/collection/detail/${item.mainId}`);
                storeScrollTop();
              }}
            >
              <img
                src={`/assets/thumbnail/${item.thumbImg}`}
                alt={item[title]}
                className="image"
              />
              <div className="main_title">{item[title]}</div>
            </div>
          </div>
        ))}
      </section>
      <div className="play_btn">
        <TTSSpeaker />
      </div>
    </div>
  );
};

export default Collection;
