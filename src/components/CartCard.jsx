import React from 'react'

export default function CartCard() {
  return (
    <section className="grid grid-col-1 gap-3">
      <div className="card">
        <div className="pos-ab card-badge card-badge-left top-left-pos">6% off</div>
        <div className="card-img">
          <img src="../assets/card-img3.png" alt="vertical card" />
        </div>
        <div className="card-info">
          <div className="card-title flex-col">
            <p className="h3 txt-semibold mb-sm">SV5 Helmet (1:1)</p>
            <div className="flex-row align-center">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-lg txt-bold mr-sm">₹9,399/-</p>
                <s className="strike-color txt-semibold">₹9,999/-</s>
              </div>
            </div>
            <hr />
          </div>

          <div className="flex-row px-md my-sm quantity">
            <p>Quantity</p>
            <div className="flex-row px-lg">
              <div className="quantity-trigger flex-center">
                <i className="fas fa-sm fa-minus"></i>
              </div>
              <input
                className="txt-reg txt-bold txt-center quantity-input"
                type="number"
                name="quantity"
                id="quantity"
                value="1"
              />
              <div className="quantity-trigger flex-center">
                <i className="fas fa-sm fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="px-lg card-btns">
            <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
              remove from cart
            </button>
            <button className="btn btn-wish btn-md txt-bold txt-reg w-100 my-1">
              move to wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="pos-ab card-badge card-badge-left top-left-pos">
          10% off
        </div>
        <div className="card-img">
          <img src="../assets/card-img1.png" alt="vertical card" />
        </div>
        <div className="card-info">
          <div className="card-title flex-col">
            <p className="h3 txt-semibold mb-sm">MV33 Brimmed Cap</p>
            <div className="flex-row align-center">
              <div className="dis-flex flex-wrap align-center">
                <p className="txt-lg txt-bold mr-sm">₹3,099/-</p>
                <s className="strike-color txt-semibold">₹3,400/-</s>
              </div>
            </div>
            <hr />
          </div>
          <div className="card-brief">
            Be part of the celebration with Max Verstappen, champion of the
            world.
          </div>
          <div className="flex-row px-md my-sm quantity">
            <p>Quantity</p>
            <div className="flex-row px-lg">
              <div className="quantity-trigger flex-center">
                <i className="fas fa-sm fa-minus"></i>
              </div>
              <input
                className="txt-reg txt-bold txt-center quantity-input"
                type="number"
                name="quantity"
                id="quantity"
                value="1"
              />
              <div className="quantity-trigger flex-center">
                <i className="fas fa-sm fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="px-lg card-btns">
            <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
              Remove from cart
            </button>
            <button className="btn btn-wish btn-md txt-bold txt-reg w-100 my-1">
              move to wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
