import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/product-context";
import { Link } from "react-router-dom";

export default function Categories() {
  const { categories, dispatch } = useProducts();
  return (
    <section className="categories">
      <h2 className="txt-center txt-semibold my-2">
        Check out various
        <span className={`${styles.imp__word} txt-bold`}> categories </span>
      </h2>
      <div className="category-list flex-wrap flex-row gap-1">
        {categories.map((category) => (
          <Link
            key={category._id}
            to="/products"
            className={`${styles.category} flex-center flex-grow-1 pointer`}
            onClick={() =>
              dispatch({
                type: "CATEGORY",
                payload: { isChecked: true, value: category.categoryName },
              })
            }>
            <img
              className="w-100 blur"
              src={category.categoryImage}
              alt="category__image"
            />
            <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>
              {category.categoryName}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
