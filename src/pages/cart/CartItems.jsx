import React from "react";
import { useAuthProducts } from "../../context/auth-products-context";
import EmptyCart from "../../assets/EmptyCart.png";
import { CartCard, EmptyPage } from "../../components";
import { useNavigate } from "react-router-dom";

export function CartItems() {
  const { state } = useAuthProducts();
  const navigate = useNavigate()
  return (
    <section className="grid grid-col-1 gap-3">
      {state["cart"].length > 0 ? (
        state["cart"].map((product) => (
          <CartCard key={product._id} product={product} />
        ))
      ) : (
        <EmptyPage
          title={"Empty Cart"}
          description={"Add items to it now!"}
          imgSrc={EmptyCart}
          imgAlt={"empty cart page"}
          type={"cart"}
          onClick={() => navigate("/products")}
        />
      )}
    </section>
  );
}
