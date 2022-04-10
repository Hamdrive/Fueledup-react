import React from "react";
import styles from "../styles/CartCard.module.css";
import { useProduct } from "../context/product-context";

export function CartCard({ product }) {
  const {
    state: { productsInWishlist },
    addToWishlist,
    removeFromCart,
    updateCartQuantity,
  } = useProduct();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product._id);
  };

  const handleMoveToWishlist = (product) => {
    if (productsInWishlist.some((item) => item._id === product._id)) {
      handleRemoveFromCart(product);
    } else {
      addToWishlist(product);
      removeFromCart(product._id);
    }
  };

  const handleUpdateCartQuantity = (product, type) => {
    updateCartQuantity(product._id, type);
  };

  return (
    <div className={`${styles.card} card`}>
      <div className={styles.card__img}>
        <img src={product.productImage} alt="cart item card" />
      </div>
      <div className={styles.card__info}>
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

        <div className="flex-row px-sm my-sm quantity">
          <div className="flex-row">
            <div
              onClick={() => {
                product.qty > 1
                  ? handleUpdateCartQuantity(product, "decrement")
                  : handleRemoveFromCart(product);
              }}
              className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-minus"></i>
            </div>
            <span
              className={`txt-reg txt-bold txt-center ${styles.quantity__input}`}>
              {product.qty}
            </span>
            <div
              onClick={() => handleUpdateCartQuantity(product, "increment")}
              className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-plus"></i>
            </div>
          </div>
        </div>
        <div className={`px-lg ${styles.card__btns} h-100`}>
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="btn btn-cta btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
            remove from cart
          </button>
          <button
            onClick={() => handleMoveToWishlist(product)}
            className="btn btn-wish btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
            move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
