import styles from "./Products.module.css";
import React from "react";
import { useProducts } from "../../context/product-context";
import ProductCard from "../../components/ProductCard";

export default function ProductItems() {
  const { finalProducts } = useProducts();

  return (
    <section
      className={`min-h-95 grid ${styles.grid__cols__auto} ${styles.grid__col__1} ${styles.grid__cols__2} gap-2 my-3 px-md`}>
      {finalProducts.length === 0 && (
        <div className="h1">No Products Available :(</div>
      )}
      {finalProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
}
