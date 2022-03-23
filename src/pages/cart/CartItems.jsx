import React from "react";
import CartCard from "../../components/CartCard";
import PriceSummary from "../../components/PriceSummary";
import styles from "./Cart.module.css";

export default function CartItems() {
  return (
    <section
      className={`${styles.page__content} grid ${styles.grid__cols__2__1} grid-cols-1 grid-reverse gap-3 pos-rel my-3 px-lg`}>
      <section className="grid grid-col-1 gap-3">
        <CartCard />
      </section>
      <PriceSummary />
    </section>
  );
}
