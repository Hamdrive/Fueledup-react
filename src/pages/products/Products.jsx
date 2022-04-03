import React, { useEffect } from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import { ProductItems } from "./ProductItems";
import "../../styles/utils.css";

export function Products() {
  useEffect(() => {
    document.title = `Shop from our various products | FueledUp`;
  }, []);
  return (
    <>
      <Navbar />
      <main className="pos-rel">
        <div className="filter-pos-size mob-hide">
          <Filters />
        </div>
        <div className="align-content-right">
          <ProductItems />
          <Footer />
        </div>
      </main>
    </>
  );
}
