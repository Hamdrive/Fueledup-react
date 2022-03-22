import { Link } from "react-router-dom";
import { useAuthProducts } from "../context/auth-products-context";
import "../styles/navbar.css";

export function Navbar() {
  const { state } = useAuthProducts();
  return (
    <div className="header pos-st top-left-pos py-md">
      <header className="max-width-1200 nav-main flex-row px-md mx-auto">
        <div className="nav-logo">
          <Link to="/">FueledUp</Link>
        </div>
        <div className="search-input">
          <div className="fas fa-search search-icon"></div>
          <label htmlFor="searchbar"></label>
          <input
            className="input-round input-sm border-2"
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder="Search products..."
          />
        </div>
        <button className="hamburger">
          <i className="fas fa-bars"></i>
        </button>
        <nav className="nav-list">
          <button className="nav-list-close-btn">
            <i className="fas fa-2x fa-times"></i>
          </button>
          <ul className="nav-menu h-100">
            <li className="nav-item">
              <Link to="/signup">
                <button className="btn btn-md btn-sec px-md">Signup</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn btn-md btn-cta btn-login px-md">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-heart-icon">
                  <Link to="/wishlist">
                    <div className="fas fa-heart badge-icon txt-md px-sm"></div>
                    <div className="badge-count top-right-icon flex-center badge-yellow">
                      {state["wishlist"].length}
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-basket-icon">
                  <Link to="/cart">
                    <div className="fas fa-shopping-cart badge-icon txt-md px-sm"></div>
                    <div className="badge-count top-right-icon flex-center badge-yellow">
                      0
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mob-search-input px-md">
        <label htmlFor="searchbar"></label>
        <input
          className="input-round input-sm border-2"
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search products..."
        />
      </div>
    </div>
  );
}
