import React, { useState, useEffect } from "react";
import { AddressModal } from "../../components";
import styles from "./UserProfile.module.css";

export function UserProfileAddresses({}) {
  const [addressModalOpen, setAddressModalOpen] = useState(false);

    useEffect(() => {
      const body = document.querySelector("body");
      body.style.overflow = addressModalOpen ? "hidden" : "auto";
    }, [addressModalOpen]);
  return (
    <>
      <div className="txt-wrap">
        <div className="flex-between">
          <h3>Address Book</h3>
          <button
            onClick={() => setAddressModalOpen(true)}
            className="btn btn-md btn-cta txt-semibold h5 px-md">
            add address
          </button>
        </div>
        <section className={styles.products__order}>
          {false ? (
            orders.map((item) => (
              <div key={item._id} className={styles.product}>
                <section>
                  <img src={item.productImage} alt="product image" />
                </section>
                <section className="flex-column">
                  <p className="flex-grow-1">{item.title}</p>
                  <p className="flex-grow-1">
                    {item.team} - {item.categoryName}
                  </p>
                  <p className="flex-grow-1">Quantity: {item.qty}</p>
                  <p className="flex-grow-1">
                    Total Price: ₹{" "}
                    {Number(item.productDiscountPrice) * Number(item.qty)}/-
                  </p>
                </section>
              </div>
            ))
          ) : (
            <div className="flex-center">
              <p className="h3">No address added yet...</p>
            </div>
          )}
        </section>
      </div>
      <AddressModal addressModalOpen={addressModalOpen} closeModal={() => setAddressModalOpen(false)} />
    </>
  );
}
