import React from "react";
import { Loader } from "../../components";
import { useProduct } from "../../context/product-context";
import styles from "./CartCard.module.css";

export function CartCard({ product }) {
  const {
    state: { productsInWishlist },
    addToWishlist,
    removeFromCart,
    updateCartQuantity,
    cartLoader,
    setCartLoader,
    wishlistLoader,
    setWishlistLoader,
  } = useProduct();

  const handleRemoveFromCart = async(product) => {
    setCartLoader(true)
    if (await removeFromCart(product._id)) setCartLoader(false);
  };

  const handleMoveToWishlist = async(product) => {
    setWishlistLoader(true)
    if (productsInWishlist.some((item) => item._id === product._id)) {
      await handleRemoveFromCart(product);
    } else {
      await addToWishlist(product);
      await removeFromCart(product._id);
    }
    setWishlistLoader(false)
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
            {cartLoader ? (
              <Loader loaderStyle={"lds-ring-auth"} />
            ) : (
              "remove from cart"
            )}
          </button>
          <button
            onClick={() => handleMoveToWishlist(product)}
            className="btn btn-wish btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
            {wishlistLoader ? (
              <Loader loaderStyle={"lds-ring-auth"} />
            ) : (
              "move to wishlist"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
