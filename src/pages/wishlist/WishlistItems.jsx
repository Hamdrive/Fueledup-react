import React from "react";
import styles from "./Wishlist.module.css";
import Hat from "../../assets/card-img1.png";
import { useAuthProducts } from "../../context/auth-products-context";
import ProductCard from "../../components/ProductCard";

export function WishlistItems() {
  const { state } = useAuthProducts();
  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">
        My Wishlist ({state["wishlist"].length})
      </h2>
      <hr />
      <section
        className={`min-h-100 grid ${styles.grid__cols__auto} ${styles.grid__col__1} ${styles.grid__cols__2} gap-2 my-3 px-md`}>
        {state["wishlist"].map((product) => (
          <ProductCard product={product} />
        ))}
      </section>
    </>
  );
}
