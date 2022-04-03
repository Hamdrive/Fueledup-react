import React from "react";
import { useAuthProducts } from "../../context/auth-products-context";
import styles from "./Cart.module.css";
import EmptyCart from "../../assets/EmptyCart.png";
import { Link } from "react-router-dom";
import { CartCard } from "../../components";

export function CartItems() {
  const { state } = useAuthProducts();

  return (
    <section className="grid grid-col-1 gap-3">
      {state["cart"].length > 0 ? (
        state["cart"].map((product) => (
          <CartCard key={product._id} product={product} />
        ))
      ) : (
        <div className="flex-column align-center h-100">
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
  );
}
