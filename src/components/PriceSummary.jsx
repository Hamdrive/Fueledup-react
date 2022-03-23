import React from 'react'

export default function PriceSummary() {
  return (
    <section className="grid-reverse">
      <h2 className="txt-capitalize">Price details</h2>
      <hr />
      <div className="price-breakup">
        <div className="flex-between my-1">
          <p>Price (2 items)</p>
          <p className="txt-semibold">₹9,999/-</p>
        </div>
        <div className="flex-between my-1">
          <p>Discount</p>
          <p className="txt-semibold">₹999/-</p>
        </div>
        <div className="flex-between my-1">
          <p className="txt-capitalize">Delivery charges</p>
          <p className="txt-semibold">₹99/-</p>
        </div>
      </div>
      <hr />
      <div className="price-total flex-between my-1">
        <p className="txt-capitalize txt-bold txt-md">Total amount</p>
        <p className="txt-md txt-bold">₹10,998/-</p>
      </div>
      <hr />
      <div className="total-message my-1">
        <p className="txt-md txt-center">
          You will save
          <strong>₹999</strong>
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
