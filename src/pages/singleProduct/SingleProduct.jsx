import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Footer,
  Loader,
  Navbar,
  Toast,
} from "../../components";
import axios from "axios";
import { SingleProductCard } from "./SingleProductCard";

export function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const res = await axios.get(`/api/products/${productId}`);
        setSingleProduct(res.data.product);
      } catch (error) {
        Toast({
          type: "warning",
          message:
            "Unable to fetch product at this time. Please reload the page.",
        });
        throw new Error(error)
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pos-rel min-h-95 flex-column align-center">
        {loader && (
          <div className="flex-center min-h-95 w-100">
            <Loader loaderStyle={"lds-ring-product"} />
          </div>
        )}
        {!loader && <SingleProductCard product={singleProduct} />}
      </main>
      <Footer />
    </div>
  );
}
