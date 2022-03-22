import React from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import ProductItems from "./ProductItems";
import "../../styles/utils.css";

export function Products() {
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
