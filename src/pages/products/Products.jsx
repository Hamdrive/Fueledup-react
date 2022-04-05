import React, { useEffect } from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import { ProductItems } from "./ProductItems";
import "../../styles/utils.css";
import styles from "./Products.module.css";
import { useState } from "react";

export function Products() {
  const [isOverflow, setisOverflow] = useState(false)
  useEffect(() => {
    document.title = `Shop from our various products | FueledUp`;
  }, []);
  return (
    <div
      className={`mobile-filter-bottom ${isOverflow ? "ov-hiden" : "ov-auto"}`}>
      <Navbar />
      <main className="pos-rel">
        <div className={styles.desktop__grid}>
          <Filters setisOverflow={setisOverflow} />
          <ProductItems />
        </div>
      </main>
      <Footer />
    </div>
  );
}
