import React from "react";
import styles from "./Checkout.module.css";

export function Addresses() {
  return (
    <div>
      <h3 className="txt-capitalize txt-left">Address Book</h3>
      <div className="my-2">
        <ul>
          <li className={styles.address__block}>
            <label>
              <input
                className="mx-2 large-radio"
                type="radio"
                name="address"
                id="address"
                checked
              />
            </label>
            <div className="w-100">
              <p className="h3">Carlos Sainz Jr.</p>
              <p>Viale di Vedano, 5, 20900 Monza MB, Italy</p>
              <p>123-456-789</p>
            </div>
          </li>
          <li className={styles.address__block}>
            <label>
              <input
                className="mx-2 large-radio"
                type="radio"
                name="address"
                id="address"
              />
            </label>
            <div className="w-100">
              <p className="h3">Lewis Hamilton</p>
              <p>Towcester NN12 8TN, United Kingdom</p>
              <p>123-456-789</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
