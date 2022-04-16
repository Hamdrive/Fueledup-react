import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { WindowScrollToTop } from "./utils";
import { AuthProvider } from "./context/auth-context";
import { ToastContainer } from "react-toastify";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <WindowScrollToTop />
          <App />
          <ToastContainer />
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
