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
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state["cart"].filter((item) => item._id !== action.payload._id),
      };

    default:
      return state;
  }
}
