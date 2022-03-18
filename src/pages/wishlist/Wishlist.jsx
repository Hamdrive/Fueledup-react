import React from "react";
import { Footer, Navbar } from "../../components";
import { WishlistCards } from "./WishlistCards";

export function Wishlist() {
  return (
    <>
      <Navbar />
      <main className="max-width-1200 mx-auto">
        <WishlistCards />
      </main>
      <Footer />
    </>
  );
}
