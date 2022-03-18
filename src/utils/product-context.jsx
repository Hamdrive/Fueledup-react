import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import {
  fastDelivery,
  inStock,
  priceRange,
  sortByPrice,
  userBrand,
  userCategory,
  userRating,
} from "./filters/filterFunctions";
import { applyFilters } from "./filters/applyFilters";
import { filterSpecification } from "./filters/filterSpecification";
import { getFinalProducts } from "./filters/getFinalProducts";

const ProductContext = createContext(filterSpecification);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(applyFilters, filterSpecification);

  const finalProducts = getFinalProducts(
    sortByPrice,
    inStock,
    fastDelivery,
    userRating,
    userCategory,
    userBrand,
    priceRange
  )(state, [...products]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ finalProducts, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
