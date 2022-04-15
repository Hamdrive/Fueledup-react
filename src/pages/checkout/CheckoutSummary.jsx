import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Toast } from "../../components";
import { useProduct } from "../../context/product-context";
import { loadScript } from "../../utils";
import styles from "./Checkout.module.css";
import portalImage from "../../assets/portalImage.png";

export function CheckoutSummary() {
  const {
    state: { productsInCart },
  } = useProduct();

  const { state: tally } = useLocation();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    handlePayment(tally.totalPrice + tally.deliveryFee);
  };

  const handlePayment = async (totalAmount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      Toast({
        type: "error",
        message: "Failed to initiate payment, please check your connection",
      });
    }

    const options = {
      key: process.env.REACT_APP_RZP_KEY_ID,
      amount: totalAmount * 100,
      currency: "INR",
      name: "FueledUp Store",
      description: "Payment for your order",
      image: { portalImage },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#7c3aed",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section
      className={`${styles.checkout__summary__pos} grid-reverse w-100 mx-auto`}>
      <h3 className="txt-capitalize txt-center">
        order summary ({productsInCart.length} items)
      </h3>
      <hr />
      <h4 className="txt-upper txt-center my-sm">purchased items</h4>
      <hr />
      <div className="price-breakup">
        <div className=" my-1">
          <div className="flex-between">
            <p className="h4 txt-bold">Item</p>
            <p className="h4 txt-bold">Price</p>
          </div>
          <ul>
            {productsInCart.map((product) => (
              <li key={product.id} className="my-md">
                <div className="flex-between">
                  <div>
                    {product.title} <p className="h6">({product.qty} Nos.)</p>
                  </div>
                  <p>₹ {product.price}/-</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <h4 className="txt-upper txt-center my-sm">price breakup</h4>
      <hr />
      <div className="price-breakup">
        <ul>
          <li className="my-md">
            <div className="flex-between">
              <p className="txt-capitalize">total amount</p>
              <p>₹ {tally.initPrice}/-</p>
            </div>
          </li>
          <li className="my-md">
            <div className="flex-between">
              <p className="txt-capitalize">total discount</p>
              <p>(-) ₹ {tally.totalDisc}/-</p>
            </div>
          </li>
          <li className="my-md">
            <div className="flex-between">
              <p className="txt-capitalize">delivery charges</p>
              <p>₹ {tally.deliveryFee}/-</p>
            </div>
          </li>
        </ul>
        <div className="price-total flex-between my-1">
          <p className="txt-capitalize txt-bold h4">Total amount</p>
          <p className="txt-md txt-bold">
            ₹ {tally.totalPrice + tally.deliveryFee}/-
          </p>
        </div>
      </div>
      <hr />
      <h4 className="txt-upper txt-center my-sm">deliver to</h4>
      <hr />
      <div className="my-2">
        <p className="h3">Hamza Husein</p>
        <p>Viale di Vedano, 5, 20900 Monza MB, Italy</p>
        <p>123-456-789</p>
      </div>

      <Link to="#">
        <button
          onClick={(e) => handlePlaceOrder(e)}
          className="btn btn-order btn-cta btn-lg txt-bold txt-reg txt-center w-100 py-sm">
          <i className="fas fa-truck"></i>
          place order
        </button>
      </Link>
    </section>
  );
}
