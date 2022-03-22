import React from "react";
import { Footer, Navbar } from "../../components";
import { WishlistItems } from "./WishlistItems";

export function Wishlist() {
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
