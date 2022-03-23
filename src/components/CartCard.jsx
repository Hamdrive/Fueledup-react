import React from 'react'
import styles from "../styles/CartCard.module.css"
import Hat from "../assets/card-img1.png"

export default function CartCard() {
  return (
    <div className={`${styles.card} card`}>
      {/* <div className="pos-ab card-badge card-badge-left top-left-pos">6% off</div> */}
      <div className={`${styles.card__img}`}>
        <img src={Hat} alt="vertical card" />
      </div>
      <div className={`${styles.card__info}`}>
        <div className="card-title flex-col">
          <p className="h3 txt-semibold mb-sm">RBR Team Headwear</p>
          <p className="txt-reg txt-semibold">
            RBR - Headwear
          </p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-bold mr-sm">₹9,399/-</p>
              <s className="strike-color txt-semibold">₹9,999/-</s>
            </div>
          </div>
        </div>

        <div className="flex-row px-md my-sm quantity">
          <p>Quantity</p>
          <div className="flex-row px-lg">
            <div className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-minus"></i>
            </div>
            <input
              className={`txt-reg txt-bold txt-center ${styles.quantity__input}`}
              type="number"
              name="quantity"
              id="quantity"
              value="1"
            />
            <div className={`${styles.quantity__trigger} flex-center`}>
              <i className="fas fa-sm fa-plus"></i>
            </div>
          </div>
        </div>
        <div className={`px-lg ${styles.card__btns} h-100`}>
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100 flex-1">
            remove from cart
          </button>
          <button className="btn btn-wish btn-md txt-bold txt-reg w-100 my-1 flex-1">
            move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
