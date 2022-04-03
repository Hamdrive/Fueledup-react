import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import CartItems from "./CartItems";
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
        <CartItems />
      </main>
      <Footer />
    </>
  );
}
