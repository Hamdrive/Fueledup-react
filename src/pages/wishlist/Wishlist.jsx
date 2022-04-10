import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import { WishlistItems } from "./WishlistItems";

export function Wishlist() {
  const {
    state: { productsInWishlist },
  } = useProduct();

  useEffect(() => {
    document.title = `My Wishlist (${productsInWishlist.length}) | FueledUp`;
  }, [productsInWishlist]);

  return (
    <>
      <Navbar />
      <main className="max-width-1200 mx-auto">
        <WishlistItems />
      </main>
      <Footer />
    </>
  );
}
