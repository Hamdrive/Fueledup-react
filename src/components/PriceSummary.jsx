import React from "react";

export default function PriceSummary({ products }) {
  const tally = products.reduce(
    (total, curr) => ({
      ...total,
      initPrice: Number(total.initPrice) + Number(curr.price),
      totalDisc:
        Number(total.totalDisc) +
        (Number(curr.price) - Number(curr.productDiscountPrice)),
      totalPrice: Number(total.totalPrice) + Number(curr.productDiscountPrice),
    }),
    {
      initPrice: 0,
      totalDisc: 0,
      totalPrice: 0,
    }
  );

  console.log(tally);

  return (
    <section className="grid-reverse">
      <h2 className="txt-capitalize">Price details</h2>
      <hr />
      <div className="price-breakup">
        <div className="flex-between my-1">
          <p>Price ({[products.length]} items)</p>
          <p className="txt-semibold">₹ {tally.initPrice}/-</p>
        </div>
        <div className="flex-between my-1">
          <p>Discount</p>
          <p className="txt-semibold">₹ {tally.totalDisc}/-</p>
        </div>
        <div className="flex-between my-1">
          <p className="txt-capitalize">Delivery charges</p>
          <p className="txt-semibold">
            ₹ {Math.ceil(tally.totalPrice * 0.05)}/-
          </p>
        </div>
      </div>
      <hr />
      <div className="price-total flex-between my-1">
        <p className="txt-capitalize txt-bold h4">Total amount</p>
        <p className="txt-md txt-bold">
          ₹ {Math.ceil(tally.totalPrice - tally.totalPrice * 0.05)}/-
        </p>
      </div>
      <hr />
      <div className="total-message my-1">
        <p className="h4 txt-center">
          You will save
          <strong> ₹ {tally.totalDisc} </strong>
          on this order!
        </p>
      </div>
      <button className="btn btn-order btn-cta btn-md txt-bold txt-reg w-100">
        <i className="fas fa-truck"></i>
        Place Order
      </button>
    </section>
  );
}
