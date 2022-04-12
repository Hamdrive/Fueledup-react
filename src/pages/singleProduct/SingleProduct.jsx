import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Navbar, SingleProductCard } from "../../components";
import { useProduct } from "../../context/product-context";

export function SingleProduct() {
  const { productId } = useParams();
  const { finalProducts } = useProduct();

  const product = finalProducts.filter((item) => item._id === productId);

  return (
    <div>
      <Navbar />
      <main className="pos-rel min-h-95 flex-column align-center">
        <SingleProductCard product={product[0]} />
      </main>
      <Footer />
    </div>
  );
}
