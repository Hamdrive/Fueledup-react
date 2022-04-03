import React, { useEffect } from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import { ProductItems } from "./ProductItems";
import "../../styles/utils.css";
import styles from "./Products.module.css";

export function Products() {
  useEffect(() => {
    document.title = `Shop from our various products | FueledUp`;
  }, []);
  return (
    <>
      <Navbar />
      <main className="pos-rel">
        <div className={`${styles.desktop__grid}`}>
          <Filters />
          <ProductItems />
        </div>
      </main>
      <Footer />
    </>
  );
}
