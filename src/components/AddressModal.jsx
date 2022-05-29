import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import { v4 as uuid } from "uuid";
import { useValidation } from "../utils/validation/useValidation";
import { Toast } from "./Toast";

const initialAddressState = {
  _id: "",
  fullName: "",
  deliveryAddress: "",
  city: "",
  state: "default",
  pincode: "",
  mobile: "",
};

export const AddressModal = ({
  addressModalOpen,
  closeModal,
  fillAddress,
  setFillAddress,
  updateAddress,
  newAddress,
}) => {
  const [address, setAddress] = useState(initialAddressState);

  const { validateAddress } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAddress(address)) {
      const addId = { ...address, _id: uuid() };
      setAddress(addId);
      newAddress(addId);
      setAddress(initialAddressState);
      closeModal();
    } else {
      Toast({
        type: "error",
        message: "Please ensure you have filled the correct address",
      });
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (validateAddress(address)) {
      updateAddress(address);
      setAddress(initialAddressState);
      setFillAddress(null);
      closeModal();
    } else {
      Toast({
        type: "error",
        message: "Please ensure you have filled the correct address",
      });
    }
  };

  const handleSampleAddress = (e) => {
    e.preventDefault();
    setAddress({
      fullName: "Abhishek Tripathi",
      deliveryAddress:
        "Panchayat Office, GramPost Phulera, Vikas Khand Fakauli",
      city: "Ballia",
      state: "Uttar Pradesh",
      pincode: "277001",
      mobile: "8796123990",
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fillAddress && setAddress(fillAddress);
  }, [fillAddress]);

  if (!addressModalOpen) return null;

  return reactDom.createPortal(
    <div className="address__main">
      <form className="address__form" onSubmit={handleSubmit}>
        <h3>Address Form</h3>
        <div className="input-section">
          <label htmlFor="fullName" className="form-input input-required">
            Full name
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="fullName"
            id="fullName"
            onChange={handleAddressChange}
            value={address.fullName}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="input-section input-textarea">
          <label
            htmlFor="deliveryAddress"
            className="form-input input-required">
            Delivery address
          </label>
          <textarea
            name="deliveryAddress"
            className="input-corner input-md border-2"
            id="deliveryAddress"
            onChange={handleAddressChange}
            value={address.deliveryAddress}
            placeholder="Bldg, room/flat, floor, street, area (landmark, if any)"
            required></textarea>
        </div>
        <div className="input-section">
          <label htmlFor="city" className="form-input input-required">
            City
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="city"
            id="city"
            onChange={handleAddressChange}
            value={address.city}
            placeholder="Mumbai"
            required
          />
        </div>
        <div className="input-section input-dropdown">
          <label htmlFor="state" className="form-input input-required">
            State
          </label>

          <select
            name="state"
            id="state"
            className="dropdown w-100"
            onChange={handleAddressChange}
            value={address.state}
            required>
            <option value="default">Select a state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="input-section">
          <label htmlFor="pincode" className="form-input input-required">
            Pin code
          </label>
          <input
            type="number"
            className="input-corner input-md border-2"
            name="pincode"
            id="pincode"
            onChange={handleAddressChange}
            value={address.pincode}
            placeholder="400003"
            pattern="^[1-9][0-9]{5}$"
            maxLength={6}
            required
          />
        </div>
        <div className="input-section">
          <label htmlFor="mobile" className="form-input input-required">
            Mobile number
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="mobile"
            id="mobile"
            onChange={handleAddressChange}
            value={address.mobile}
            placeholder="6234567890"
            pattern="^[6-9][0-9]{9}$"
            maxLength={10}
            required
          />
        </div>
        {fillAddress ? (
          <div className="mt-1">
            <div className="flex-between gap-3">
              <button
                type="submit"
                onClick={handleUpdateSubmit}
                className="btn btn-cta btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
                Update
              </button>
              <button
                onClick={closeModal}
                className="btn btn-wish btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-1">
            <div className="flex-between gap-3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-cta btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
                Save
              </button>
              <button
                onClick={closeModal}
                className="btn btn-wish btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
                Cancel
              </button>
            </div>
            <button
              onClick={handleSampleAddress}
              className="btn btn-wish btn-lg txt-bold txt-reg w-100 flex-1 my-sm">
              Fill Sample Address
            </button>
          </div>
        )}
      </form>
    </div>,
    document.getElementById("addressModal")
  );
};
