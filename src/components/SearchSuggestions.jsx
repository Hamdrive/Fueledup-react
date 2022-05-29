import React from "react";
import { Link } from "react-router-dom";

export const SearchSuggestions = ({ searchResults }) => {
  console.log(searchResults);

  return (
    <div className="search__results">
      {" "}
      {searchResults.length ? (
        searchResults.map((product) => (
          <Link to={`/products/${product.id}`}>
            <div key={product._id} className="search__list">
              <section className="search__image">
                <img src={product.productImage} alt="product image" />
              </section>
              <section className="flex-column">
                <p className=" h4 txt-semibold">{product.title}</p>
                <p className=" h5">{product.team}</p>
              </section>
            </div>
          </Link>
        ))
      ) : (
        <div className="px-md">
          <p className=" h4 txt-semibold">Product not found</p>
        </div>
      )}
    </div>
  );
};
