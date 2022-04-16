import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useProduct } from "../context/product-context";

export const RedirectRefresh = () => {
  const {
    state: { productsInCart },
  } = useProduct();

  const {pathname} = useLocation()

  return  productsInCart?.length && pathname === "/summary" ? (
    <Outlet />
  ) : (
    <Navigate to="/products" replace />
  );
};
