import React from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

export function Addresses({ addressBook, deliveryAdd, setDeliveryAdd }) {
  const handleChange = (address) => {
    setDeliveryAdd(address);
  };

  return (
    <div>
      <h3 className="txt-capitalize txt-left">Address Book</h3>
      <div className="my-2">
        <ul className="checkout__addresses">
          {addressBook.length ? (
            addressBook.map((address) => (
              <li key={address._id} className={styles.address__block}>
                <label>
                  <input
                    className="mx-2 large-radio"
                    type="radio"
                    name="address"
                    id="address"
                    checked={deliveryAdd._id === address._id}
                    onChange={() => handleChange(address)}
                  />
                </label>
                <div className="flex-column my-1">
                  <p className="flex-grow-1 txt-bold h4">{address.fullName}</p>
                  <p className="flex-grow-1">
                    {address.deliveryAddress}, {address.city}, {address.state},{" "}
                    {address.pincode}
                  </p>
                  <p className="flex-grow-1">Mobile Number: {address.mobile}</p>
                </div>
              </li>
            ))
          ) : (
            <div className="flex-center flex-column">
              <p className="h3">
                Please add a delivery address in order to place your delivery
              </p>
              <Link to="/profile">
                <button
                  type="submit"
                  className="btn btn-cta btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
                  Go to profile
                </button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
