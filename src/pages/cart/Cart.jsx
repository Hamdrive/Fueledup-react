import React, { useEffect } from "react";
import { Footer, Navbar, PriceSummary } from "../../components";
import { CartItems } from "./CartItems";
import styles from "./Cart.module.css";

export function Cart() {
  const { state } = useAuthProducts();

  useEffect(() => {
    document.title = `My Cart (${state["cart"].length}) | FueledUp`;
  }, [state]);

  return (
    <>
      <Navbar />
      <main className={`${styles.max__width__1200} mx-auto`}>
        <h2 className="page-title txt-bold mx-auto py-md">
          My Cart ({state["cart"].length})
        </h2>
        <hr />
        <section
          className={`min-h-95 grid grid-cols-1 grid-reverse gap-3 pos-rel my-3 px-lg ${
            styles.page__content
          } ${state["cart"].length > 0 && styles.grid__cols__2__1}`}>
          <CartItems />
        </section>
        {state["cart"].length > 0 && <PriceSummary products={state["cart"]} />}
      </main>
      <Footer />
    </>
  );
}
