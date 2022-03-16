import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const res = await axios.get("/api/categories");
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="categories">
      <h3>
        Check out various
        <span className={styles.imp__word}> categories </span>
      </h3>
      <div className="category-list flex-wrap flex-row gap-1">
        {categories.map((category) => (
          <div
            key={category._id}
            className={`${styles.category} flex-center flex-grow-1`}>
            <img
              className="w-100 blur"
              src={category.categoryImage}
              alt="category__image"
            />
            <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>
              {category.categoryName}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
