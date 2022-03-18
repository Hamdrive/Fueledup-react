import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { ApplyFilters } from "./ApplyFilters";
import { FilterSpecification } from "./FilterSpecification";

const ProductContext = createContext(FilterSpecification);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(ApplyFilters ,FilterSpecification);

  useEffect(() => {
    {
      async () => {
        try {
          const res = await axios.get("/api/products");
          setProducts(res.data.products);
        } catch (error) {
          console.log(error);
        }
      };
    }
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, useProducts };
