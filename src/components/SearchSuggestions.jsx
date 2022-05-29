import React from "react";
import { useProduct } from "../context/product-context";

export const SearchSuggestions = () => {
  const {
    state: { products },
  } = useProduct();
  return (
    <div className="search__results">
      {" "}
      {products.map((product) => (
        <div key={product._id} className="search__list">
          <section className="search__image">
            <img src={product.productImage} alt="product image" />
          </section>
          <section className="flex-column">
            <p className=" h4 txt-semibold">{product.title}</p>
            <p className=" h5">
              {product.team}
            </p>
          </section>
        </div>
      ))}
    </div>
  );
};
