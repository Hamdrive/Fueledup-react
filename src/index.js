import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { AuthProductsProvider } from "./context/auth-products-context";
import { WindowScrollToTop } from "./utils";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProductsProvider>
        <ProductProvider>
          <WindowScrollToTop />
          <App />
        </ProductProvider>
      </AuthProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
