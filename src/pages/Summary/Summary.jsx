import React from "react";
import Confetti from "react-confetti";
import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import styles from "./Summary.module.css";
import useWindowSize from "react-use/lib/useWindowSize";

export function Summary() {
  const {
    state: { order },
  } = useLocation();

  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1500}
        gravity={0.15}
        recycle={false}
      />
      <Navbar />
      <main className="pos-rel max-width-1200 min-h-95 flex-column flex-center mx-auto">
        <h2 className="txt-center my-2">Order Summary</h2>
        <div className={styles.summary__card}>
          <section className="flex-column">
            <div className="h3 txt-semibold txt-center flex-grow-1">
              Order successfully placed!
            </div>
            <div className="h4 txt-center flex-grow-1">
              Thank you for shopping! 🚀
            </div>
            <p className="h4 txt-center flex-grow-1">
              Payment ID : {order.paymentId}
            </p>
            <p className="h4 txt-center  flex-grow-1">
              Amount Paid : ₹ {order.amountPaid}/-
            </p>
          </section>
          <section className={styles.products__order}>
            {order.orderedProducts.map((item) => (
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
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
