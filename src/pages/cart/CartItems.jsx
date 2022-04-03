import React, { useEffect, useState } from "react";
import CartCard from "../../components/CartCard";
import PriceSummary from "../../components/PriceSummary";
import { useAuthProducts } from "../../context/auth-products-context";
import styles from "./Cart.module.css";
import EmptyCart from "../../assets/EmptyCart.png";
import { Link } from "react-router-dom";

export default function CartItems() {
  const { state } = useAuthProducts();

  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">
        My Cart ({state["cart"].length})
      </h2>
      <hr />
      <section
        className={`min-h-95 grid grid-cols-1 grid-reverse gap-3 pos-rel my-3 px-lg ${
          styles.page__content
        } ${state["cart"].length > 0 && styles.grid__cols__2__1}`}>
        <section className="grid grid-col-1 gap-3">
          {state["cart"].length > 0 ? (
            state["cart"].map((product) => (
              <CartCard key={product._id} product={product} />
            ))
          ) : (
            <div className="dis-flex flex-column align-center">
              <img
                className={`${styles.empty__cart}`}
                src={EmptyCart}
                alt="empty cart"
              />
              <div className="flex-column align-center txt-center">
                <h3>Empty Cart</h3>
                <p>Add items to it now!</p>
              </div>
              <Link
                to="/products"
                className="btn btn-cta btn-lg flex-center txt-bold txt-reg mx-auto mt-1 mb-1 txt-center txt-wrap">
                Add Products
              </Link>
            </div>
          )}
        </section>
        {state["cart"].length > 0 && <PriceSummary products={state["cart"]} />}
      </section>
    </>
  );
}
