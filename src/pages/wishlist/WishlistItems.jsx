import React from "react";
import styles from "./Wishlist.module.css";
import EmptyWishlist from "../../assets/EmptyWishlist.png";
import { EmptyPage, WishlistCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/product-context";

export function WishlistItems() {
  const {
    state: { productsInWishlist },
  } = useProduct();

  const navigate = useNavigate();

  return (
    <>
      <h2 className="page-title txt-bold mx-auto py-md">
        My Wishlist ({productsInWishlist.length})
      </h2>
      <hr />
      <section
        className={`min-h-95 grid ${styles.grid__cols__auto} gap-2 my-3 px-md`}>
        {productsInWishlist.length > 0 ? (
          productsInWishlist.map((product) => (
            <WishlistCard key={product._id} product={product} />
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
