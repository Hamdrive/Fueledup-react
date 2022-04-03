import React, { useEffect } from "react";
import { Navbar } from "../../components";
import "./login.css";

export function Login() {
  useEffect(() => {
    document.title = `Login | FueledUp`;
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div class="main my-2">
          <main class="px-md">
            <section class="login-page">
              <div class="login-modal m-auto form-border py-md">
                <form class="form px-lg">
                  <h2 class="login-title txt-bold">
                    <em>Login</em>
                  </h2>
                  <div class="input-section">
                    <label for="input" class="form-input input-required">
                      Email ID
                    </label>
                    <input
                      type="email"
                      class="input-corner input-md border-2"
                      name="input"
                      id="input"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div class="input-section">
                    <label for="input" class="form-input input-required">
                      Password
                    </label>
                    <div class="input-toggle pos-rel">
                      <i class="fas fa-eye-slash pos-ab pointer"></i>
                      <input
                        type="password"
                        class="input-corner input-md border-2 pr-4"
                        name="input"
                        id="input"
                        placeholder="***********"
                      />
                    </div>
                  </div>
                  <div class="input-checkbox forgot-pass">
                    <div class="remember-user">
                      <input
                        type="checkbox"
                        class="checkbox"
                        name="agree"
                        id="remember"
                      />
                      <label for="remember" class="form-input txt-reg">
                        Remember me
                      </label>
                    </div>
                    <div class="forgot">
                      <a
                        href="#"
                        class="dis-flex flex-center alt-auth-txt txt-reg txt-semibold">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <button
                    class="btn btn-cta btn-md submit-btn txt-bold txt-reg w-100 py-md mt-1"
                    type="submit">
                    Login
                  </button>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
