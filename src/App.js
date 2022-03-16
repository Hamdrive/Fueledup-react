import {Routes, Route} from "react-router-dom"
import {Home, Products, Cart, Wishlist, Login, Signup} from "./pages/index.jsx"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
  );
}
