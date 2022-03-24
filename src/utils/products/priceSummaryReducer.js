export const priceSummaryReducer = ([...items]) =>
  items.reduce((priceTally, currItem) => {}, {
    initPrice: 0,
    totalDisc: 0,
    totalPrice: 0,
    totalItems: 0,
  });
