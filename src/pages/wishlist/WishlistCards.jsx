import React from "react";
import styles from "./Wishlist.module.css";
import Hat from "../../assets/card-img1.png";

export function WishlistCards() {
  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">My Wishlist (4)</h2>
      <hr />
      <section
        className={`min-h-100 grid ${styles.grid__cols__auto} ${styles.grid__col__1} ${styles.grid__cols__2} gap-2 my-3 px-md`}>
        <div className={`pos-rel card ${styles.card} mx-auto`}>
          {false && (
            <div
              className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
              <p
                className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
                Out&nbsp;Of Stock
              </p>
            </div>
          )}
          <div className="pos-ab card-badge card-badge-left top-left-pos">
            10% off
          </div>
          <div className={`remove-card-btn pos-ab ${styles.top__right__pos}`}>
            <i className="far fa-2x fa-times-circle"></i>
          </div>
          <div className={`${styles.card__img}`}>
            <img src={Hat} alt="vertical card" />
          </div>
          <div className="card-title flex-col">
            <p className="txt-md txt-bold mb-sm">MV33 Brimmed Cap</p>
            <p className="txt-reg txt-semibold">Redball - Hat</p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-md txt-bold mr-sm"> ₹3,099/-</p>
                <s className="strike-color txt-semibold">₹3,400/-</s>
              </div>
              <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                3.6
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
        <div className={`pos-rel card ${styles.card} mx-auto`}>
          {false && (
            <div
              className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
              <p
                className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
                Out&nbsp;Of Stock
              </p>
            </div>
          )}
          <div className="pos-ab card-badge card-badge-left top-left-pos">
            10% off
          </div>
          <div className={`remove-card-btn pos-ab ${styles.top__right__pos}`}>
            <i className="far fa-2x fa-times-circle"></i>
          </div>
          <div className={`${styles.card__img}`}>
            <img src={Hat} alt="vertical card" />
          </div>
          <div className="card-title flex-col">
            <p className="txt-md txt-bold mb-sm">MV33 Brimmed Cap</p>
            <p className="txt-reg txt-semibold">Redball - Hat</p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-md txt-bold mr-sm"> ₹3,099/-</p>
                <s className="strike-color txt-semibold">₹3,400/-</s>
              </div>
              <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                3.6
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
        <div className={`pos-rel card ${styles.card} mx-auto`}>
          {false && (
            <div
              className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
              <p
                className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
                Out&nbsp;Of Stock
              </p>
            </div>
          )}
          <div className="pos-ab card-badge card-badge-left top-left-pos">
            10% off
          </div>
          <div className={`remove-card-btn pos-ab ${styles.top__right__pos}`}>
            <i className="far fa-2x fa-times-circle"></i>
          </div>
          <div className={`${styles.card__img}`}>
            <img src={Hat} alt="vertical card" />
          </div>
          <div className="card-title flex-col">
            <p className="txt-md txt-bold mb-sm">MV33 Brimmed Cap</p>
            <p className="txt-reg txt-semibold">Redball - Hat</p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-md txt-bold mr-sm"> ₹3,099/-</p>
                <s className="strike-color txt-semibold">₹3,400/-</s>
              </div>
              <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                3.6
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
        <div className={`pos-rel card ${styles.card} mx-auto`}>
          {false && (
            <div
              className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
              <p
                className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
                Out&nbsp;Of Stock
              </p>
            </div>
          )}
          <div className="pos-ab card-badge card-badge-left top-left-pos">
            10% off
          </div>
          <div className={`remove-card-btn pos-ab ${styles.top__right__pos}`}>
            <i className="far fa-2x fa-times-circle"></i>
          </div>
          <div className={`${styles.card__img}`}>
            <img src={Hat} alt="vertical card" />
          </div>
          <div className="card-title flex-col">
            <p className="txt-md txt-bold mb-sm">MV33 Brimmed Cap</p>
            <p className="txt-reg txt-semibold">Redball - Hat</p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-md txt-bold mr-sm"> ₹3,099/-</p>
                <s className="strike-color txt-semibold">₹3,400/-</s>
              </div>
              <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                3.6
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
