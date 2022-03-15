import { Link } from "react-router-dom";
import "../styles/navbar.css"

export function Navbar() {
  return (
    <div class="header pos-st top-left-pos py-md">
      <header class="max-width-1200 nav-main flex-row px-md mx-auto">
        <div class="nav-logo">
          <Link to="/">FueledUp</Link>
        </div>
        <div class="search-input">
          <div class="fas fa-search search-icon"></div>
          <label for="searchbar"></label>
          <input
            class="input-round input-sm border-2"
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder="Search products..."
          />
        </div>
        <button class="hamburger">
          <i class="fas fa-bars"></i>
        </button>
        <nav class="nav-list">
          <button class="nav-list-close-btn">
            <i class="fas fa-2x fa-times"></i>
          </button>
          <ul class="nav-menu h-100">
            <li class="nav-item">
              <Link to="/signup">
                <button class="btn btn-md btn-sec px-md">Signup</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button class="btn btn-md btn-cta btn-login px-md">
                  Login
                </button>
              </Link>
            </li>
            <li class="nav-item">
              <div class="badge">
                <div class="ecom-heart-icon">
                  <Link to="/wishlist">
                    <div class="fas fa-heart badge-icon txt-md px-sm"></div>
                    <div class="badge-count top-right-icon flex-center badge-yellow">
                      0
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div class="badge">
                <div class="ecom-basket-icon">
                  <Link to="/cart">
                    <div class="fas fa-shopping-cart badge-icon txt-md px-sm"></div>
                    <div class="badge-count top-right-icon flex-center badge-yellow">
                      0
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div class="mob-search-input px-md">
        <label for="searchbar"></label>
        <input
          class="input-round input-sm border-2"
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search products..."
        />
      </div>
    </div>
  );
}
