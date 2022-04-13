import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Loader } from "../../components";
import { useProduct } from "../../context/product-context";
import styles from "./Products.module.css";

export function ProductCard({ product }) {
    const [wishlistLoader, setWishlistLoader] = useState(false);
    const [cartLoader, setCartLoader] = useState(false);
  const {
    state: { productsInWishlist, productsInCart },
    addToWishlist,
    removeFromWishlist,
    addToCart,
  } = useProduct();

  const handleAddToWishlist = async (product) => {
    setWishlistLoader(true);
    if (await addToWishlist(product)) setWishlistLoader(false);
  };

  const handleAddToCart = async (product) => {
    setCartLoader(true);
    if (await addToCart(product)) setCartLoader(false);
  };

  const handleRemoveFromWishlist = async (product) => {
    setWishlistLoader(true);
    if (await removeFromWishlist(product._id)) setWishlistLoader(false);
  };

  return (
    <div className={`pos-rel card ${styles.card} mx-auto`}>
      {!product.inStock && (
        <div
          className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
          <p
            className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
            Out&nbsp;Of Stock
          </p>
        </div>
      )}
      <div className="pos-ab card-badge card-badge-left top-left-pos">
        {product.productDiscount}% off
      </div>
      <div
        className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn} pointer`}>
        {productsInWishlist.some((item) => item._id === product._id) ? (
          wishlistLoader ? (
            <Loader loaderStyle={"lds-ring-heart"} />
          ) : (
            <i
              onClick={() => handleRemoveFromWishlist(product)}
              className={`fa fa-heart ${styles.fill} `}></i>
          )
        ) : wishlistLoader ? (
          <Loader loaderStyle={"lds-ring-heart"} />
        ) : (
          <i
            onClick={() => handleAddToWishlist(product)}
            className="far fa-heart "></i>
        )}
      </div>
      <div className={`${styles.card__img}`}>
        <Link to={`/products/${product.id}`} state={{ productID: product.id }}>
          <img src={product.productImage} alt="vertical card" />
        </Link>
      </div>
      <div className="card-title flex-col flex-grow-1">
        <p className="txt-md txt-bold">{product.title}</p>
        <p className="txt-reg txt-semibold">
          {product.team} - {product.categoryName}
        </p>
        <div className="flex-row align-center mt-1">
          <div className="dis-flex flex-wrap align-center">
            <p className="txt-md txt-semibold mr-sm">
              ₹ {product.productDiscountPrice}
            </p>
            <s className="strike-color txt-semibold">₹{product.price}</s>
          </div>
          <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
            <i className="fas fa-sm fa-star"></i>
            {product.productRating}
          </p>
        </div>
      </div>
      <hr />
      <div className="card-footer flex-around flex-grow-1">
        {productsInCart.some((item) => item._id === product._id) ? (
          <Link
            to="/cart"
            className="btn btn-suc btn-lg txt-bold txt-reg w-100 txt-center">
            <i className="fas fa-shopping-cart"></i>
            go to cart
          </Link>
        ) : (
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-cta btn-lg txt-bold txt-reg w-100">
            {cartLoader ? (
              <Loader loaderStyle={"lds-ring-auth"} />
            ) : (
              <>
                <i className="fas fa-cart-plus"></i>
                add to cart
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
