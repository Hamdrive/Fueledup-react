import React from "react";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import { useDocumentTitle } from "../../utils";
import { CartItems } from "../cart/CartItems";
import styles from "./Checkout.module.css";
import { CheckoutSummary } from "./CheckoutSummary";

export function Checkout() {
  const {
    state: { productsInCart },
  } = useProduct();

  useDocumentTitle(`Checkout | FueledUp`);

  return (
    <>
      <Navbar />
      <main className="min-h-95 pos-rel">
        <h2 className="page-title txt-bold mx-auto py-md">Checkout</h2>
        <hr />
        <section
          className={`${
            styles.max__width__1200
          } grid grid-cols-1 grid-reverse gap-3 pos-rel mx-auto ${
            styles.page__content
          } ${productsInCart.length > 0 && styles.grid__cols__2}`}>
          <CartItems />
          {productsInCart.length > 0 && <CheckoutSummary />}
        </section>
      </main>
      <Footer />
    </>
  );
}
