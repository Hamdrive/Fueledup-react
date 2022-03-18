import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { applyFilters } from "./applyFilters";
import { filterSpecification } from "./filterSpecification";

const ProductContext = createContext(filterSpecification);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(applyFilters, filterSpecification);
  useMemo

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
