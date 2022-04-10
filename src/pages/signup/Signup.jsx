import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import { initialUserState } from "../../utils/auth/authReducer";
import "./signup.css";

export function Signup() {
  const [signupDetails, setSignupDetails] = useState(
    initialUserState.userDetails
  );
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { signupUser, loader } = useAuth();

  const handleSignupDetails = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupDetails);
    signupUser(signupDetails);
  };

  useEffect(() => {
    document.title = `Signup | FueledUp`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="main my-2">
        <main className="px-md">
          <section className="sign-up-page">
            <div className="sign-up-modal  m-auto form-border py-md">
              <form className="form px-lg grid grid-cols-2 gap-1">
                <h2 className="sign-up-title grid-span-2 txt-bold">
                  <em>Sign-up</em>
                </h2>
                <div className="input-section">
                  <label
                    htmlFor="firstname"
                    className="form-input input-required">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input-corner input-md border-2"
                    name="firstname"
                    id="input"
                    placeholder="John"
                    onChange={(e) => handleSignupDetails(e)}
                  />
                </div>
                <div className="input-section">
                  <label
                    htmlFor="lastname"
                    className="form-input input-required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input-corner input-md border-2"
                    name="lastname"
                    id="input"
                    placeholder="Doe"
                    onChange={(e) => handleSignupDetails(e)}
                  />
                </div>
                <div className="input-section grid-span-2">
                  <label htmlFor="email" className="form-input input-required">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="input-corner input-md border-2"
                    name="email"
                    id="input"
                    placeholder="john.doe@email.com"
                    onChange={(e) => handleSignupDetails(e)}
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
                      id="input"
                      placeholder="***********"
                      onChange={(e) => handleSignupDetails(e)}
                    />
                  </div>
                </div>
                <div className="input-section">
                  <label htmlFor="input" className="form-input input-required">
                    Confirm Password
                  </label>
                  <div className="input-toggle pos-rel">
                    <i
                      onClick={() => setShowConfirmPass((prev) => !prev)}
                      className="fas fa-eye-slash pos-ab pointer"></i>
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      className="input-corner input-md border-2 pr-4"
                      name="input"
                      id="input"
                      placeholder="***********"
                    />
                  </div>
                </div>
                <div className="input-checkbox grid-span-2">
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="agree"
                      id="terms"
                    />
                    <label
                      htmlFor="terms"
                      className="form-input input-required txt-reg">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-cta btn-md submit-btn txt-bold h4 w-100 my-1 grid-span-2"
                  type="submit"
                  onClick={(e) => handleSignup(e)}>
                  {loader ? <Loader loaderStyle={"lds-ring-auth"} /> : "Signup"}
                </button>
              </form>
              <div>
                <Link
                  to="/login"
                  className="dis-flex flex-center alt-auth-txt txt-reg txt-semibold">
                  Already have an account?
                  <i className="fas fa-chevron-circle-right ml-1"></i>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
