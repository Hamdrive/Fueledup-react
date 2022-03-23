export function sortByPrice(state, data) {
  if (state.priceSort === "LOW")
    return data.sort((a, b) => Number(a["productDiscountPrice"]) - Number(b["productDiscountPrice"]));
  if (state.priceSort === "HIGH")
    return data.sort((a, b) => Number(b["productDiscountPrice"]) - Number(a["productDiscountPrice"]));
  return data;
}

export function inStock(state, data) {
  return state.inStock ? data.filter((product) => product.inStock) : data;
}
export function fastDelivery(state, data) {
  return state.fastDelivery
    ? data.filter((product) => product.fastDelivery)
    : data;
}

export function userRating(state, data) {
  return data.filter(
    (product) => Number(product.productRating) >= Number(state.ratings)
  );
}

export function priceRange(state, data) {
  return data.filter(
    (product) =>
      Number(product.productDiscountPrice) <= Number(state.priceRange)
  );
}

export function userCategory(state, data) {
  return state["categories"].length === 0
    ? data
    : data.filter((product) =>
        state["categories"].includes(product.categoryName)
      );
}

export function userBrand(state, data) {
  return state["brands"].length === 0
    ? data
    : data.filter((product) =>
        state["brands"].includes(product.team)
      );
}
