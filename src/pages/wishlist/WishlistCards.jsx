import React from "react";
import styles from "./Wishlist.module.css";

export function WishlistCards() {
  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">My Wishlist</h2>
      <hr />
      <section className="page-content grid grid-cols-auto grid-col-1 grid-cols-2 gap-1 mx-auto px-lg">
        <div className={`${styles.card} mx-auto`}>
          {!product.inStock && (
            <div
              className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
              <p
                className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
                Out&nbsp;Of Stock
              </p>
            </div>
          )}
          <div className={`remove-card-btn pos-ab ${styles.top__right__pos}`}>
            <i className="far fa-2x fa-times-circle"></i>
          </div>
          <div className={`${styles.card__img}`}>
            <img src={product.productImage} alt="vertical card" />
          </div>
          <div className="card-title flex-col">
            <p className="txt-md txt-bold mb-sm">{product.title}</p>
            <p className="txt-reg txt-semibold">
              {product.team} - {product.categoryName}
            </p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-md txt-bold mr-sm">
                  ₹ {product.productDiscountPrice}
                </p>
                <s className="strike-color txt-semibold">₹ {product.price}</s>
              </div>
              <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                {product.productRating}
              </p>
            </div>
          </div>
          <hr />
          <div className="card-footer flex-around flex-grow-1">
            <button className="btn btn-wish btn-md txt-bold txt-reg w-100">
              <i className="fas fa-shopping-cart"></i>
              move to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
