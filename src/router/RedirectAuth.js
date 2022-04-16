import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RedirectAuth = () => {
  const { userToken } = useAuth();

  return userToken ? <Navigate to="/products" replace /> : <Outlet />;
};
