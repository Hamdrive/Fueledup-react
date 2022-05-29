import React, { useEffect, useState } from "react";
import { useProduct } from "../context/product-context";
import { SearchSuggestions } from "./SearchSuggestions";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {
    state: { products },
  } = useProduct();
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    console.log(searchQuery);
  };

  const getSearchResults = () => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
    console.log(results);
    setSearchResults(results);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);
  return (
    <div className="search-input searchbar">
      <div>
        <div className="fas fa-search search-icon"></div>
        <label htmlFor="searchbar"></label>
        <input
          className="input-corner input-sm border-2"
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search products..."
          onChange={handleSearchQuery}
        />
      </div>
      {searchQuery && <SearchSuggestions searchResults={searchResults} />}
    </div>
  );
};
