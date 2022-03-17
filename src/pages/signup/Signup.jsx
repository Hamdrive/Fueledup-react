import React from "react";
import { Navbar } from "../../components";
import "./signup.css";

export function Signup() {
  return (
    <>
    <Navbar />
      <div class="main my-2">
        <main class="px-md">
          <section class="sign-up-page">
            <div class="sign-up-modal  m-auto form-border py-md">
              <form class="form px-lg grid grid-cols-2 gap-1">
                <h2 class="sign-up-title grid-span-2 txt-bold">
                  <em>Sign-up</em>
                </h2>
                <div class="input-section">
                  <label for="input" class="form-input input-required">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="input-corner input-md border-2"
                    name="input"
                    id="input"
                    placeholder="John"
                  />
                </div>
                <div class="input-section">
                  <label for="input" class="form-input input-required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="input-corner input-md border-2"
                    name="input"
                    id="input"
                    placeholder="Doe"
                  />
                </div>
                <div class="input-section grid-span-2">
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
                <div class="input-section">
                  <label for="input" class="form-input input-required">
                    Confirm Password
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
                <div class="input-checkbox grid-span-2">
                  <div>
                    <input
                      type="checkbox"
                      class="checkbox"
                      name="agree"
                      id="terms"
                    />
                    <label
                      for="terms"
                      class="form-input input-required txt-reg">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                </div>
                <button
                  class="btn btn-cta btn-md submit-btn txt-bold txt-reg w-100 my-1 grid-span-2"
                  type="submit">
                  Sign-up
                </button>
              </form>
              <div>
                <a
                  href="#"
                  class="dis-flex flex-center alt-auth-txt txt-reg txt-semibold">
                  Already have an account?
                  <i class="fas fa-chevron-circle-right ml-1"></i>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
