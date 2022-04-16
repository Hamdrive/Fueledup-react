import React from "react";
import Confetti from "react-confetti";
import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import styles from "./Summary.module.css";

export function Summary() {
  const {
    state: { orders },
  } = useProduct();

  const {
    state: { orderId },
  } = useLocation();

  const order = orders.find((item) => item.orderId === orderId);

  return (
    <div className="flex-column">
      <Confetti numberOfPieces={1500} gravity={0.15} recycle={false} />
      <Navbar />
      <main className="pos-rel max-width-1200 min-h-95 grid grid-40-60 gap-1">
        <div className={styles.summary__card}>
          <section>
            <div className="h3">Order successfully placed!</div>
            <div className="h4">Thank you for shopping with us! 🚀</div>
            <p className="h4 txt-semibold">Order ID : {order.orderId}</p>
            <p className="h4 txt-semibold">Amount Paid : {order.amountPaid}</p>
          </section>
          <section className={styles.products__order}>
            {order.map((item) => (
              <div className="grid grid-30-70 gap-1">
                <section>
                  <img src={item.productImage} alt="product image" />
                </section>
                <section>
                  <p>{item.title}</p>
                  <p>
                    {item.team} - {item.catefoy}
                  </p>
                  <p>Quantity: {item.qty}</p>
                  <p>
                    Total Price:{" "}
                    {Number(item.productDiscountPrice) * Number(item.qty)}
                  </p>
                </section>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
