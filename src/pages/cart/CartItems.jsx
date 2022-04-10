import React from "react";
import EmptyCart from "../../assets/EmptyCart.png";
import { CartCard, EmptyPage } from "../../components";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/product-context";

export function CartItems() {
  const {
    state: { productsInCart },
  } = useProduct();

  const navigate = useNavigate();

  return (
    <section className="grid grid-col-1 gap-3">
      {productsInCart.length > 0 ? (
        productsInCart.map((product) => (
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
