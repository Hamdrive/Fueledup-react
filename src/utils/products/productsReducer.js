export function productsReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state["wishlist"].filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state["cart"].filter((item) => item._id !== action.payload._id),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state["cart"].map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      let isQuantityZero = false;
      let updatedCart = state["cart"].map((item) => {
        if (item._id === action.payload._id) {
          if (item.quantity === 1) isQuantityZero = true;
          else {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        } else {
          return item;
        }
      });

      if (isQuantityZero) {
        updatedCart = updatedCart.filter((item) => item._id !== action.payload._id);
      }

      return {...state, cart: updatedCart}

    // case "MOVE_TO_WISHLIST":
    //   const updatedCart = {
    //     ...state,
    //     cart: state["cart"].filter((item) => item._id !== action.payload._id),
    //   };
    //   const updatedWishlist = {
    //     ...state,
    //     cart: state["cart"].filter((item) => item._id !== action.payload._id),
    //   };
    //   return {
    //     ...state,
    //     cart: state["cart"].filter((item) => item._id !== action.payload._id),
    //   };

    default:
      return state;
  }
}
