import { createContext, useContext, useState, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../utils";
import { initialUserState } from "../utils/auth/authReducer";
import { performUserLogin, performUserSignup } from "../utils/server-routes";

const AuthContext = createContext(initialUserState);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const [loader, setLoader] = useState(false);

  const [userDetails, dispatchUserDetails] = useReducer(
    authReducer,
    initialUserState
  );

  const navigate = useNavigate();
  const location = useLocation();

  const signupUser = async (signupCredentials) => {
    setLoader(true);
    try {
      const res = await performUserSignup(signupCredentials);
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);

        dispatchUserDetails({ type: "SIGNUP", payload: res.data });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const loginUser = async (loginCredentials) => {
    setLoader(true);
    try {
      const res = await performUserLogin(loginCredentials);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        dispatchUserDetails({ type: "LOGIN", payload: res.data });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  const logoutUser = () => {
    dispatchUserDetails({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        userToken,
        loader,
        loginUser,
        logoutUser,
        signupUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
