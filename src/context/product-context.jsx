import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { Toast } from "../components";
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
      if ((res.status === 200) | (res.status === 201)) {
        Toast({type: "success", message: "Product added to your cart! ✨"})
        dispatch({ type: "ADD_TO_CART", payload: res.data.cart });
      }
    } catch (error) {
      Toast({type: "error", message: "Something went wrong from our end. Try again."})
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await performGetCart(userToken);
      if ((res.status === 200) | (res.status === 201)) {
        dispatch({ type: "GET_CART", payload: res.data.cart });
      }
    } catch (error) {
      Toast({type: "error", message: "We had an issue fetching your cart. Please reload the page."})
      console.log(error);
    }
  };

  const updateCartQuantity = async (id, type) => {
    try {
      const res = await performUpdateCartQuantity(id, type, userToken);
      if ((res.status === 200) | (res.status === 201)) {
        Toast({type: "info", message: "Product quantity updated ✨"})
        dispatch({
          type: "UPDATE_CART",
          payload: res.data.cart,
        });
      }
    } catch (error) {
      Toast({type: "error", message: "We were unable to do that. Please try again."})
    }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await performRemoveFromCart(id, userToken);
      if ((res.status === 200) | (res.status === 201)) {
        Toast({type: "info", message: "Product has been removed from cart 🧹"})
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: res.data.cart,
        });
      }
    } catch (error) {
      Toast({type: "error", message: "We were unable to remove the product from your cart. Please try again."})
      console.log(error);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const res = await performAddToWishlist(product, userToken);
      if ((res.status === 200) | (res.status === 201)) {
        Toast({type: "success", message: "Product added to your wishlist ✨"})
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch (error) {
      Toast({type: "error", message: "Something went wrong from our end. Try again."})
      console.log(error);
    }
  };

  const getWishlist = async (product) => {
    try {
      const res = await performGetWishlist(product, userToken);
      if ((res.status === 200) | (res.status === 201)) {
        dispatch({ type: "GET_WISHLIST", payload: res.data.wishlist });
      }
    } catch (error) {
      Toast({type: "error", message: "We had an issue fetching your wishlist. Please reload the page"})
      console.log(error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const res = await performRemoveFromWishlist(id, userToken);
      if ((res.status === 200) | (res.status === 201)) {
        Toast({type: "info", message: "Product has been removed from wishlist 🧹"})
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: res.data.wishlist,
        });
      }
    } catch (error) {
      Toast({
        type: "error",
        message:
          "We were unable to remove the product from your wishlist. Please try again.",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await performGetCategories();
        if ((res.status === 200) | (res.status === 201)) {
            dispatch({ type: "SET_CATEGORIES", payload: res.data.categories });
          }
      } catch (error) {
        Toast({type: "warning", message: "Unable to fetch categories at this time. Please reload the page."})
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
        Toast({type: "warning", message: "Unable to fetch products at this time. Please reload the page."})
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
