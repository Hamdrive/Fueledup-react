import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useProduct } from "../context/product-context";

export const RedirectRefresh = () => {
  const {
    state: { productsInCart },
  } = useProduct();

  const { pathname } = useLocation();

  return pathname === "/checkout" ||
    pathname === "/summary" ||
    productsInCart?.length ? (
    <Outlet />
  ) : (
    <Navigate to="/products" replace />
  );
};
