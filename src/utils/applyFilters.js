import { filterSpecification } from "./filterSpecification";

export function applyFilters(state, action) {
  function updateCategories(state, category) {
    return state["categories"].filter(
      (existingCategory) => existingCategory !== category
    );
  }

  switch (action.type) {
    case "LOW":
      return { ...state, priceSort: action.payload };
    case "HIGH":
      return { ...state, priceSort: action.payload };
    case "INSTOCK":
      return { ...state, inStock: !state.inStock };
    case "FASTDELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "RATING":
      return { ...state, ratings: action.payload };
    case "PRICE":
      return { ...state, priceRange: action.payload };
    case "CATEGORY":
      return {
        ...state,
        categories: state["categories"].includes(action.payload)
          ? updateCategories(state, action.payload)
          : state["categories"].concat(action.payload),
      };
    case "CLEAR":
      return { ...filterSpecification };

    default:
      return state;
  }
}
