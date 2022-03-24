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
      let quantityZeroFlag = false;
      let updatedCart = state["cart"].map((item) => {
        item._id === action.payload._id
          ? item.quantity === 1
            ? (quantityZeroFlag = true)
            : { ...item, quantity: item.quantity - 1 }
          : item;
        return item;
      });

      return quantityZeroFlag
        ? {
            ...state,
            cart: updatedCart.filter((item) => item._id !== action.payload._id),
          }
        : { ...state, cart: updatedCart };
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
