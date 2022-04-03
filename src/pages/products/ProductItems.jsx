import styles from "./Products.module.css";
import React from "react";
import { useProducts } from "../../context/product-context";
import ProductsNotFound from "../../assets/ProductsNotFound.png";
import { ProductCard } from "../../components";

export function ProductItems() {
  const { finalProducts } = useProducts();

  return (
    <section
      className={`min-h-95 grid ${styles.grid__cols__auto} gap-2 my-3 px-md`}>
      {finalProducts.length > 0 ? (
        finalProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <div className={`${finalProducts.length === 0 && "span-auto"}`}>
          <div className="h-100 flex-column flex-center">
            <img
              className={`${styles.empty__products}`}
              src={ProductsNotFound}
              alt="No products found"
            />
            <div className="flex-column align-center txt-center">
              <h3>This place is devoid of any life!</h3>
              <p>We couldn't find any products, try changing your filters.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
