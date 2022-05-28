import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useProduct } from "../context/product-context";
import "../styles/navbar.css";

export function Navbar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const { userToken, logoutUser } = useAuth();
  const {
    state: { productsInWishlist, productsInCart },
  } = useProduct();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const toggleSideMenu = () => {
    setisSideMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    isSideMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isSideMenuOpen]);

  return (
    <div className="header pos-st top-left-pos py-md">
      <header className="max-width-1200 h-100 nav-main nav-layout px-md mx-auto">
        <nav className="flex-row w-100">
          <div className="flex-center w-100">
            <button onClick={() => toggleSideMenu()} className="hamburger">
              <i className="fas fa-bars"></i>
            </button>
            <div className="nav-logo">
              <Link to="/">FueledUp</Link>
            </div>
            <div className="search-input">
              <div className="fas fa-search search-icon"></div>
              <label htmlFor="searchbar"></label>
              <input
                className="input-corner input-sm border-2"
                type="search"
                name="searchbar"
                id="searchbar"
                placeholder="Search products..."
              />
            </div>
          </div>
          <ul className={` ${"nav-menu"} h-100`}>
            <li className="nav-item">
              <Link to="/profile">
                <div className="fas fa-user-circle txt-lg px-sm"></div>
              </Link>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-heart-icon">
                  <Link to="/wishlist">
                    <div className="fas fa-heart badge-icon txt-lg px-sm"></div>
                    {userToken && (
                      <div className="badge-count top-right-icon flex-center badge-yellow">
                        {productsInWishlist.length}
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-basket-icon">
                  <Link to="/cart">
                    <div className="fas fa-shopping-cart badge-icon txt-lg px-sm"></div>
                    {userToken && (
                      <div className="badge-count top-right-icon flex-center badge-yellow">
                        {productsInCart.length}
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div className="mob-search-input px-md">
          <label htmlFor="searchbar"></label>
          <input
            className="input-corner input-sm border-2"
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder="Search products..."
          />
        </div>
        <div
          className={`sidebar-menu ${isSideMenuOpen && "sidebar-menu-open"}`}>
          <div
            onClick={() => toggleSideMenu()}
            className="sidebar-menu-close-btn flex-center pointer">
            <i className="fas fa-2x fa-times"></i>
          </div>
          <div className="nav-logo-sidemenu">
            <Link to="/">FueledUp</Link>
          </div>
          <ul
            className={` ${
              isSideMenuOpen ? "nav-menu-mob" : "nav-menu"
            } h-100`}>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn btn-lg btn-cta px-md w-100">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-heart-icon">
                  <Link to="/wishlist">
                    <button className="btn btn-lg btn-wish px-md w-100">
                      Wishlist
                      <div className="badge-count top-right-icon flex-center badge-yellow">
                        {productsInWishlist.length}
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="badge">
                <div className="ecom-basket-icon">
                  <Link to="/cart">
                    <button className="btn btn-lg btn-cta px-md w-100">
                      Cart
                      <div className="badge-count top-right-icon flex-center badge-yellow">
                        {productsInCart.length}
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
