import React from "react";
import { useProduct } from "../../context/product-context";
import styles from "./UserProfile.module.css";

export function UserProfileOrders({}) {
  const {
    state: { orders },
  } = useProduct();

  return (
    <>
      <div className="txt-wrap">
        <h3 className="py-sm">Order Summary</h3>
        <section className={styles.products__order}>
          {orders?.length > 0 ? (
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
              <p className="h3">No orders yet...</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
