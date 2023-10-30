import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainList from "../../data/Main";
import CategoryList from "../../data/Category";

import "./collection.scss";

export const Collection = () => {
  const [category, setCategory] = useState(0);

  const handleCategory = (e) => {
    const selectedCategory = parseInt(e.target.value, 10);
    setCategory(selectedCategory);
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

      <section className="img_section">
        {MainList.filter(
          (item) => category === 0 || category === item.category
        ).map((item, i) => (
          <div key={i} className="items">
            <div className="figure">
              <Link to={`/collection/detail/${i}`}>
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
