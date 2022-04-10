import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequireAuth = ({ children }) => {
  const { userToken } = useAuth();
  const location = useLocation();

  console.log(userToken)

  return userToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
