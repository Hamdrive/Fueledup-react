import React from "react";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import { useDocumentTitle } from "../../utils";
import { WishlistItems } from "./WishlistItems";

export function Wishlist() {

  useDocumentTitle(`My Wishlist | FueledUp`);

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
