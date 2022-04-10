import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader, Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import "./login.css";

export function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const { loginUser, loader } = useAuth();

  const handleTestCredentials = (e) => {
    e.preventDefault();
    setLoginCredentials({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginCredentials);
  };

  useEffect(() => {
    document.title = `Login | FueledUp`;
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main my-2">
          <main className="px-md">
            <section className="login-page">
              <div className="login-modal m-auto form-border py-md">
                <form className="form px-lg">
                  <h2 className="login-title txt-bold">
                    <em>Login</em>
                  </h2>
                  <div className="input-section">
                    <label
                      htmlFor="emailID"
                      className="form-input input-required">
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="input-corner input-md border-2"
                      name="emailID"
                      id="emailID"
                      value={loginCredentials.email}
                      onChange={(e) =>
                        setLoginCredentials((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div className="input-section">
                    <label
                      htmlFor="password"
                      className="form-input input-required">
                      Password
                    </label>
                    <div className="input-toggle pos-rel">
                      <i
                        onClick={() => setShowPass((prev) => !prev)}
                        className="fas fa-eye-slash pos-ab pointer"></i>
                      <input
                        type={showPass ? "text" : "password"}
                        className="input-corner input-md border-2 pr-4"
                        name="password"
                        id="password"
                        value={loginCredentials.password}
                        onChange={(e) =>
                          setLoginCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        placeholder="***********"
                      />
                    </div>
                  </div>
                  <div className="input-checkbox forgot-pass">
                    <div className="remember-user my-1">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="agree"
                        id="remember"
                      />
                      <label className="form-input txt-reg">Remember me</label>
                    </div>
                    <div className="forgot">
                      <a
                        href="#"
                        className="dis-flex flex-center alt-auth-txt txt-reg txt-semibold">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <button
                    className="btn btn-cta btn-lg submit-btn txt-bold h4 w-100 py-md mt-1"
                    type="submit"
                    onClick={(e) => handleLogin(e)}>
                    {loader ? (
                      <Loader loaderStyle={"lds-ring-auth"} />
                    ) : (
                      "Login"
                    )}
                  </button>
                  <button
                    className="btn btn-wish btn-lg submit-btn txt-bold h4 w-100 py-md mt-1"
                    onClick={(e) => handleTestCredentials(e)}>
                    Fill Test Credentials
                  </button>
                </form>
                <div className="my-1">
                  <Link
                    to="/signup"
                    className="dis-flex flex-center alt-auth-txt txt-reg txt-semibold">
                    New User? Let's set you up
                    <i className="fas fa-chevron-circle-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
