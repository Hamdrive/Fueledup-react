import styles from "./Products.module.css";
import React from "react";
import { useProduct } from "../../context/product-context";
import ProductsNotFound from "../../assets/ProductsNotFound.png";
import { EmptyPage, ProductCard } from "../../components";

export function ProductItems() {
  const { finalProducts } = useProduct();

  return (
    <section
      className={`min-h-95 grid ${styles.grid__cols__auto} gap-2 py-md mx-sm`}>
      {finalProducts.length > 0 ? (
        finalProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <div className={`${finalProducts.length === 0 && "span-auto"}`}>
          <EmptyPage
            title={"This place is devoid of any life!"}
            description={
              "We couldn't find any products, try changing your filters."
            }
            imgSrc={ProductsNotFound}
            imgAlt={"No products found"}
            type={"products"}
          />
        </div>
      )}
    </section>
  );
}
