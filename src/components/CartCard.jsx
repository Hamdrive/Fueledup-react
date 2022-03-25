import React from "react";
import styles from "../styles/CartCard.module.css";
import Hat from "../assets/card-img1.png";
import { useAuthProducts } from "../context/auth-products-context";

export default function CartCard({ product }) {
  const { state, dispatch } = useAuthProducts();


  return (
    <div className={`${styles.card} card`}>
      <div className={`${styles.card__img}`}>
        <img src={product.productImage} alt="cart item card" />
      </div>
      <div className={`${styles.card__info}`}>
        <div className="card-title flex-col">
          <p className="h3 txt-semibold mb-sm">{product.title}</p>
          <p className="txt-reg txt-semibold">
            {product.team} - {product.categoryName}
          </p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-bold mr-sm">
                ₹ {product.productDiscountPrice}
              </p>
              <s className="strike-color txt-semibold">₹{product.price}</s>
            </div>
          </div>
        </div>

        <div className="flex-row px-md my-sm quantity">
          <p>Quantity</p>
          <div className="flex-row px-lg">
            <div
              onClick={() =>
                dispatch({ type: "DECREMENT_QUANTITY", payload: product })
              }
              className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-minus"></i>
            </div>
            <span
              className={`txt-reg txt-bold txt-center ${styles.quantity__input}`}>
              {product.quantity}
            </span>
            <div
              onClick={() =>
                dispatch({ type: "INCREMENT_QUANTITY", payload: product })
              }
              className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-plus"></i>
            </div>
          </div>
        </div>
        <div className={`px-lg ${styles.card__btns} h-100`}>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
            className="btn btn-cta btn-lg txt-bold txt-reg w-100 flex-1">
            remove from cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "MOVE_TO_WISHLIST", payload: product })
            }
            className="btn btn-wish btn-lg txt-bold txt-reg w-100 my-1 flex-1">
            move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
