import { Navigate, Outlet } from "react-router-dom";
import { useProduct } from "../context/product-context";

export const RedirectRefresh = () => {
  const {
    state: { productsInCart, orders },
  } = useProduct();

  return orders?.length | productsInCart?.length ? (
    <Outlet />
  ) : (
    <Navigate to="/products" replace />
  );
};
