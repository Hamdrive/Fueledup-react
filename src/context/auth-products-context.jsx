import { createContext, useState, useContext, useReducer } from "react";
import { productsReducer } from "../utils/products/productsReducer";

const productsSpecification = { wishlist: [], cart: [] };

const AuthProductsContext = createContext(productsSpecification);

const useAuthProducts = () => useContext(AuthProductsContext);

const AuthProductsProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([])

  const [state, dispatch] = useReducer(productsReducer, productsSpecification);

  return (
    <AuthProductsContext.Provider value={{ state, dispatch, wishlist, cart }}>
      {children}
    </AuthProductsContext.Provider>
  );
};

export { AuthProductsProvider, useAuthProducts };
