import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequireAuth = () => {
  const { userToken } = useAuth();
  const location = useLocation();

  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
