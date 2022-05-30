import React, { useState, useEffect } from "react";
import { AddressModal } from "../../components";
import { useAuth } from "../../context/auth-context";
import styles from "./UserProfile.module.css";

export function UserProfileAddresses({}) {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [fillAddress, setFillAddress] = useState(null);

  const {
    userDetails: { addressBook },
    userDetails,
    setAddress,
    updateAddress,
    deleteAddress,
  } = useAuth();

  const handleEditAddress = (address) => {
    setFillAddress(address);
    setAddressModalOpen(true);
  };

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
        <section className={styles.address__order}>
          {addressBook.length ? (
            addressBook.map((address) => (
              <div key={address._id}>
                <div className="flex-column my-1">
                  <p className="flex-grow-1 txt-bold h4">{address.fullName}</p>
                  <p className="flex-grow-1">
                    {address.deliveryAddress}, {address.city}, {address.state},{" "}
                    {address.pincode}
                  </p>
                  <p className="flex-grow-1">Mobile Number: {address.mobile}</p>
                </div>
                <div className="flex-between gap-5 px-sm">
                  <button
                    onClick={() => handleEditAddress(address)}
                    className="btn btn-cta btn-md txt-bold txt-reg w-50 my-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAddress(address)}
                    className="btn btn-wish btn-md txt-bold txt-reg w-50 my-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-center">
              <p className="h3">No address added yet...</p>
            </div>
          )}
        </section>
      </div>
      <AddressModal
        addressModalOpen={addressModalOpen}
        fillAddress={fillAddress}
        setFillAddress={setFillAddress}
        newAddress={setAddress}
        updateAddress={updateAddress}
        closeModal={() => setAddressModalOpen(false)}
      />
    </>
  );
}
