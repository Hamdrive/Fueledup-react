import {Routes, Route} from "react-router-dom"
import Cart from "./pages/cart/Cart.jsx"
import Wishlist from "./pages/wishlist/Wishlist.jsx"
import Signup from "./pages/signup/Signup.jsx"
import Login from "./pages/login/Login.jsx"
import Products from "./pages/products/Products.jsx";
import Home from "./pages/home/Home";

function App() {
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

export default App;
