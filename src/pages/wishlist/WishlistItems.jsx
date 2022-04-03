import React from "react";
import styles from "./Wishlist.module.css";
import { useAuthProducts } from "../../context/auth-products-context";
import EmptyWishlist from "../../assets/EmptyWishlist.png";
import { ProductCard } from "../../components";

export function WishlistItems() {
  const { state } = useAuthProducts();
  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">
        My Wishlist ({state["wishlist"].length})
      </h2>
      <hr />
      <section
        className={`min-h-95 grid ${styles.grid__cols__auto} gap-2 my-3 px-md`}>
        {state["wishlist"].length > 0 ? (
          state["wishlist"].map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="flex-column align-center h-100">
            <img
              className={`${styles.empty__wishlist}`}
              src={EmptyWishlist}
              alt="empty wishlist"
            />
            <div className="flex-column align-center txt-center">
              <h3>Empty Wishlist</h3>
              <p>You have no items in your wishlist. Start adding!</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
