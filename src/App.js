import { Routes, Route } from "react-router-dom";
import { MockAPI } from "./components";
import {
  Home,
  Products,
  Cart,
  Wishlist,
  Login,
  Signup,
  PageNotFound,
  SingleProduct,
  Checkout,
  Summary,
  UserProfile,
} from "./pages";
import { RedirectRefresh, RequireAuth } from "./router";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route element={<RequireAuth />}>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route element={<RedirectRefresh />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Route>
      <Route path="/mockman" element={<MockAPI />} />
    </Routes>
  );
}
