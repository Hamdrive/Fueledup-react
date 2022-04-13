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
} from "./pages";
import { RequireAuth } from "./router/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route element={<RequireAuth />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
      <Route path="/mockman" element={<MockAPI />} />
    </Routes>
  );
}
