export const initialDataState = {
  products: [],
  categories: [],
  productsInCart: [],
  productsInWishlist: [],
  filters: {
    priceSort: "",
    inStock: false,
    fastDelivery: false,
    priceRange: 7500,
    ratings: 0,
    categories: [],
    brands: [],
  },
};

export function productReducer(dataState, { type, payload }) {
  function updateCategories(dataState, category) {
    return dataState.filters.categories.filter(
      (existingCategory) => existingCategory !== category
    );
  }
  function updateBrands(dataState, brand) {
    return dataState.filters.brands.filter(
      (existingBrand) => existingBrand !== brand
    );
  }

  switch (type) {
    case "LOW":
      return {
        ...dataState,
        filters: { ...dataState.filters, priceSort: payload },
      };

    case "HIGH":
      return {
        ...dataState,
        filters: { ...dataState.filters, priceSort: payload },
      };

    case "INSTOCK":
      return {
        ...dataState,
        filters: { ...dataState.filters, inStock: !dataState.inStock },
      };

    case "FASTDELIVERY":
      return {
        ...dataState,
        filters: {
          ...dataState.filters,
          fastDelivery: !dataState.fastDelivery,
        },
      };

    case "RATING":
      return {
        ...dataState,
        filters: { ...dataState.filters, ratings: payload },
      };

    case "PRICE":
      return {
        ...dataState,
        filters: { ...dataState.filters, priceRange: payload },
      };

    case "CATEGORY":
      return {
        ...dataState,
        filters: {
          ...dataState.filters,
          categories:
            payload.isChecked === false
              ? updateCategories(dataState, payload.value)
              : dataState.filters.categories.concat(payload.value),
        },
      };

    case "BRAND":
      return {
        ...dataState,
        filters: {
          ...dataState.filters,
          brands: dataState.filters.brands.includes(payload)
            ? updateBrands(dataState, payload)
            : dataState["brands"].concat(payload),
        },
      };

    case "SET_PRODUCTS": {
      return { ...dataState, products: payload };
    }

    case "SET_CATEGORIES": {
      return { ...dataState, categories: payload };
    }

    case "ADD_TO_WISHLIST":
    case "GET_WISHLIST":
    case "REMOVE_FROM_WISHLIST":
      return { ...dataState, productsInWishlist: payload };

    case "ADD_TO_CART":
    case "GET_CART":
    case "UPDATE_CART":
    case "REMOVE_FROM_CART":
      return { ...dataState, productsInCart: payload };

    case "CLEAR_CART":
      return {...dataState, productsInCart: []}

    case "CLEAR":
      return { ...dataState, filters: { ...initialDataState.filters } };

    case "LOGOUT":
      return { ...initialDataState };

    default:
      return dataState;
  }
}
