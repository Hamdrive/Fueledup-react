import React from "react";
import { Filters, Navbar, Footer, Loader } from "../../components";
import { ProductItems } from "./ProductItems";
import "../../styles/utils.css";
import styles from "./Products.module.css";
import { useState } from "react";
import { useDocumentTitle } from "../../utils";
import { useProduct } from "../../context/product-context";

export function Products() {
  const [isOverflow, setisOverflow] = useState(false);

  const { loader } = useProduct();

  useDocumentTitle(`Shop from our various products | FueledUp`);

  return (
    <div
      className={`mobile-filter-bottom ${isOverflow ? "ov-hiden" : "ov-auto"}`}>
      <Navbar />
      <main className="pos-rel">
        <div className={styles.desktop__grid}>
          {loader ? (
            <div className="flex-center min-h-95 w-100 span-2">
              <Loader loaderStyle={"lds-ring-product"} />
            </div>
          ) : (
            <>
              <Filters setisOverflow={setisOverflow} />
              <ProductItems />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
