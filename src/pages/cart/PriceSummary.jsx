import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { priceTallyReducer } from "../../utils";
import styles from "./Cart.module.css"

export function PriceSummary() {
  const {
    state: { productsInCart },
  } = useProduct();

  const tally = priceTallyReducer(productsInCart);

  return (
    <section className={`${styles.price__summary__pos} grid-reverse w-100 mx-auto`}>
      <h2 className="txt-capitalize">Price details</h2>
      <hr />
      <div className="price-breakup">
        <div className="flex-between my-1">
          <p>Price ({tally.quantity} items)</p>
          <p className="txt-semibold">₹ {tally.initPrice}/-</p>
        </div>
        <div className="flex-between my-1">
          <p>Discount</p>
          <p className="txt-semibold">₹ {tally.totalDisc}/-</p>
        </div>
        <div className="flex-between my-1">
          <p className="txt-capitalize">Delivery charges</p>
          <p className="txt-semibold">
            ₹ {Math.ceil(tally.totalPrice * 0.05)}/-
          </p>
        </div>
      </div>
      <hr />
      <div className="price-total flex-between my-1">
        <p className="txt-capitalize txt-bold h4">Total amount</p>
        <p className="txt-md txt-bold">
          ₹ {Math.ceil(tally.totalPrice - tally.totalPrice * 0.05)}/-
        </p>
      </div>
      <hr />
      <div className="total-message my-2">
        <p className="h4 txt-center">
          You will save
          <strong> ₹ {tally.totalDisc} </strong>
          on this order!
        </p>
      </div>

      <Link
        to="/checkout">
        <button className="btn btn-order btn-cta btn-lg txt-bold txt-reg txt-center w-100 py-sm">
        <i className="fas fa-cash-register"></i>
        checkout
        </button>
      </Link>
    </section>
  );
}
