export const getFinalProducts =
  (...filterFunctions) =>
  (state, products) => {
    return filterFunctions.reduce((acc, curr) => curr(state, acc), products);
  };
