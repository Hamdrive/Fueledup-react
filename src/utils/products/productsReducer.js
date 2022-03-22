export function productsReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return state["wishlist"].filter((item) => item.id !== action.payload._id);
    default:
      return state;
  }
}
