import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  fastDelivery,
  inStock,
  priceRange,
  sortByPrice,
  userBrand,
  userCategory,
  userRating,
  getFinalProducts,
  initialDataState,
  productReducer,
} from "../utils";
import {
  performAddToCart,
  performAddToWishlist,
  performGetCart,
  performGetCategories,
  performGetProducts,
  performGetWishlist,
  performRemoveFromCart,
  performRemoveFromWishlist,
  performUpdateCartQuantity,
} from "../utils/server-routes";
import { useAuth } from "./auth-context";

const ProductContext = createContext(initialDataState);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  // Setup in future PR
  // const [loader, setLoader] = useState(false);

  const [state, dispatch] = useReducer(productReducer, initialDataState);
  const { userToken } = useAuth();

  const finalProducts = getFinalProducts(
    sortByPrice,
    inStock,
    fastDelivery,
    userRating,
    userCategory,
    userBrand,
    priceRange
  )(state.filters, [...state.products]);

  const addToCart = async (product) => {
    try {
      const res = await performAddToCart(product, userToken);
      console.log(res);
      dispatch({ type: "ADD_TO_CART", payload: res.data.cart });
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await performGetCart(userToken);
      console.log(res);
      dispatch({ type: "GET_CART", payload: res.data.cart });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartQuantity = async (id, type) => {
    try {
      const res = await performUpdateCartQuantity(id, type, userToken);
      console.log(res);
      dispatch({
        type: "UPDATE_CART",
        payload: res.data.cart,
      });
    } catch (error) {}
  };

  const removeFromCart = async (id) => {
    try {
      const res = await performRemoveFromCart(id, userToken);
      console.log(res);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: res.data.cart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const res = await performAddToWishlist(product, userToken);
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: res.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getWishlist = async (product) => {
    try {
      const res = await performGetWishlist(product, userToken);
      dispatch({ type: "GET_WISHLIST", payload: res.data.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const res = await performRemoveFromWishlist(id, userToken);
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: res.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await performGetCategories();
        if (res.status === 200 || res.status === 201) {
          dispatch({ type: "SET_CATEGORIES", payload: res.data.categories });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await performGetProducts();
        if (res.status === 200 || res.status === 201) {
          dispatch({ type: "SET_PRODUCTS", payload: res.data.products });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        finalProducts,
        addToWishlist,
        getWishlist,
        removeFromWishlist,
        addToCart,
        getCart,
        updateCartQuantity,
        removeFromCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
