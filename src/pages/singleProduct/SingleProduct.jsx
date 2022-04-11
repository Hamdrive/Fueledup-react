import React from "react";
import { useParams } from "react-router-dom";
import { SingleProductCard } from "../../components";
import { useProduct } from "../../context/product-context";

export function SingleProduct() {
  const { productId } = useParams();
  const { finalProducts } = useProduct();

  const product = finalProducts.filter((item) => item._id === productId)

  return <div><SingleProductCard product={product} /></div>;
}
