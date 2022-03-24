import React, { useEffect, useState } from "react";
import CartCard from "../../components/CartCard";
import PriceSummary from "../../components/PriceSummary";
import { useAuthProducts } from "../../context/auth-products-context";
import { priceSummaryReducer } from "../../utils/products/priceSummaryReducer";
import styles from "./Cart.module.css";

export default function CartItems() {
  const { state } = useAuthProducts();
  console.log(state);

  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">
        My Cart ({state["cart"].length})
      </h2>
      <hr />
      <section
        className={`${styles.page__content} grid ${styles.grid__cols__2__1} grid-cols-1 grid-reverse gap-3 pos-rel my-3 px-lg`}>
        <section className="grid grid-col-1 gap-3">
          {state["cart"].map((product) => (
            <CartCard key={product._id} product={product} />
          ))}
        </section>
        <PriceSummary products={state["cart"]} />
      </section>
    </>
  );
}
