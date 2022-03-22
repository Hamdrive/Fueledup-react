import { createContext, useState, useContext, useReducer } from "react";

const productsSpecification = { wishlist: [], cart: [] };

const AuthProductsContext = createContext(wishlistSpecification);

const useAuthProducts = () => useContext(AuthProductsContext);

const AuthProductsProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([])

  const [state, dispatch] = useReducer(productsReducer, productsSpecification);

  return (
    <AuthProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthProductsContext.Provider>
  );
};

export { AuthProductsProvider, useAuthProducts };
