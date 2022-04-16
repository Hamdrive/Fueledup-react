import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { useAuth } from "../../context/auth-context";
import { useProduct } from "../../context/product-context";
import styles from "./SingleProductCard.module.css";

export function SingleProductCard({ product }) {
  const {
    state: { productsInWishlist, productsInCart },
    addToWishlist,
    addToCart,
    cartLoader,
    setCartLoader,
    wishlistLoader,
    setWishlistLoader,
  } = useProduct();

  const { userToken } = useAuth();
  const navigate = useNavigate();

  const handleAddToWishlist = async (product) => {
    setWishlistLoader(true);
    if (!userToken) return navigate("/login", { replace: true });
    if (await addToWishlist(product)) setWishlistLoader(false);
  };

  const handleAddToCart = async (product) => {
    setCartLoader(true);
    if (!userToken) return navigate("/login", { replace: true });
    if (await addToCart(product)) setCartLoader(false);
  };

  return (
    <div className="max-width-1200 mx-auto py-3 h-100 flex-column align-center flex-1">
      <div className={`${styles.card} card w-100 h-100 flex-1`}>
        <div className="pos-ab card-badge card-badge-left top-left-pos txt-lg">
          {product.productDiscount}% off
        </div>
        <div className={`${styles.card__img} w-100`}>
          <img src={product.productImage} alt="cart item card" />
        </div>
        <div className={`${styles.card__info} w-100`}>
          <div className="card-title flex-col p-1">
            <p className="h2 txt-semibold mb-sm">{product.title}</p>
            <p className="h4 txt-semibold">
              {product.team} - {product.categoryName}
            </p>
            <div className="flex-row align-center mt-1">
              <div className="dis-flex flex-wrap align-center">
                <p className="h2 txt-bold mr-sm">
                  ₹ {product.productDiscountPrice}
                </p>
                <s className="strike-color h4 txt-semibold">₹{product.price}</s>
              </div>
              <p className="txt-md txt-semibold ml-auto rating">
                <i className="fas fa-sm fa-star"></i>
                {product.productRating}
              </p>
            </div>
          </div>
          <div className="flex-row flex-1 p-1">
            <p className="txt-md">{product.productDescription}</p>
          </div>

          <div className={`px-lg ${styles.card__btns}`}>
            {userToken &&
            productsInCart.some((item) => item._id === product._id) ? (
              <Link
                to="/cart"
                className="btn btn-suc btn-lg txt-bold txt-reg w-100 txt-center mb-1">
                <i className="fas fa-shopping-cart"></i>
                go to cart
              </Link>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-cta btn-lg txt-bold txt-reg w-100 mb-1">
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
            {userToken &&
            productsInWishlist.some((item) => item._id === product._id) ? (
              <Link
                to="/wishlist"
                className="btn btn-wish btn-lg txt-bold txt-reg w-100 txt-center mt-1">
                go to wishlist
              </Link>
            ) : (
              <button
                onClick={() => handleAddToWishlist(product)}
                className="btn btn-wish btn-lg txt-bold txt-reg w-100 mt-1">
                {wishlistLoader ? (
                  <Loader loaderStyle={"lds-ring-auth"} />
                ) : (
                  <>
                    <i className="fas fa-heart"></i>
                    add to wishlist
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
