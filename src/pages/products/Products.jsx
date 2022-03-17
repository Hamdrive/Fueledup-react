import React from "react";
import { Filters, Navbar, Footer } from "../../components/index";
import ProductCards from "./ProductCards";
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
          <ProductCards />
          <Footer />
        </div>
      </main>
    </>
  );
}
