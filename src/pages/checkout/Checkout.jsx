import React, {useState} from "react";
import { Footer, Navbar } from "../../components";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";
import { useDocumentTitle } from "../../utils";
import { Addresses } from "./Addresses";
import styles from "./Checkout.module.css";
import { CheckoutSummary } from "./CheckoutSummary";

export function Checkout() {
  const {
    userDetails: { addressBook },
  } = useAuth();
  const [deliveryAdd, setDeliveryAdd] = useState(addressBook[0] ?? null);
  const {
    state: { productsInCart },
  } = useProduct();

  useDocumentTitle(`Checkout | FueledUp`);

  return (
    <>
      <Navbar />
      <main className="min-h-95 pos-rel">
        <h2 className="page-title txt-bold mx-auto py-md">Checkout</h2>
        <hr />
        <section
          className={`${
            styles.max__width__1200
          } grid grid-cols-1 grid-reverse gap-3 pos-rel mx-auto ${
            styles.page__content
          } ${productsInCart.length > 0 && styles.grid__cols__2}`}>
          <Addresses addressBook={addressBook} deliveryAdd={deliveryAdd} setDeliveryAdd={setDeliveryAdd} />
          {productsInCart.length > 0 && <CheckoutSummary deliveryAdd={deliveryAdd}/>}
        </section>
      </main>
      <Footer />
    </>
  );
}
