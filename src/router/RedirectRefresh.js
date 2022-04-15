import { Navigate, Outlet } from "react-router-dom";
import { useProduct } from "../context/product-context";

export const RedirectRefresh = () => {
  const {
    state: { productsInCart },
  } = useProduct();

  return productsInCart?.length ? (
    <Outlet />
  ) : (
    <Navigate to="/products" replace />
  );
};
