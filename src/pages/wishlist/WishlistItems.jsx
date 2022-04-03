import React from "react";
import styles from "./Wishlist.module.css";
import { useAuthProducts } from "../../context/auth-products-context";
import EmptyWishlist from "../../assets/EmptyWishlist.png";
import { EmptyPage, ProductCard } from "../../components";
import { useNavigate } from "react-router-dom";

export function WishlistItems() {
  const { state } = useAuthProducts();
  const navigate = useNavigate();
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
          <EmptyPage
            title={"Empty Wishlist"}
            description={"You have no items in your wishlist. Start adding!"}
            imgSrc={EmptyWishlist}
            imgAlt={"empty wishlist page"}
            type={"wishlist"}
            onClick={() => navigate("/products")}
          />
        )}
      </section>
    </>
  );
}
