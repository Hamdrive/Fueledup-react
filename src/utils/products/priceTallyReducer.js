export function priceTallyReducer(products) {
  return products.reduce(
    (summary, item) => ({
      ...summary,
      initPrice:
        (Number(summary.initPrice) + Number(item.price)) * Number(item.qty),
      totalDisc:
        (Number(summary.totalDisc) +
          (Number(item.price) - Number(item.productDiscountPrice))) *
        Number(item.qty),
      totalPrice:
        (Number(summary.totalPrice) + Number(item.productDiscountPrice)) *
        Number(item.qty),
      quantity: summary.quantity + item.qty,
    }),
    {
      initPrice: 0,
      totalDisc: 0,
      totalPrice: 0,
      quantity: 0,
    }
  );
}
