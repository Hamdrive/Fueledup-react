import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { useAuthProducts } from "../../context/auth-products-context";
import { WishlistItems } from "./WishlistItems";

export function Wishlist() {
  const { state } = useAuthProducts();

  useEffect(() => {
    document.title = `My Wishlist (${state["wishlist"].length}) | FueledUp`;
  }, [state]);

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
