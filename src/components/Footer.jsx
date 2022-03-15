import { Link } from "react-router-dom";
import "../styles/footer.css"

export function Footer() {
  return (
    <div class="py-md footer footer-doc">
      <footer class="max-width-1200 grid grid-cols-2 gap-2 grid-ver-center mx-auto px-lg">
        <div class="footer-info">
          <div class="footer-social py-sm">Quick&nbsp;Links</div>
          <ul class="footer-social-icons grid grid-col-1 gap-1 py-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">My&nbsp;Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">My&nbsp;Wishlist</Link>
            </li>
          </ul>
        </div>
        <div class="footer-brief">
          <div class="footer-social py-sm">Socials</div>
          <ul class="footer-social-icons dis-flex gap-2 py-sm">
            <li>
              <a href="https://github.com/Hamdrive">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/itsHamhere">
                <i class="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hamza-husein/">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://peerlist.io/hamza">
                <i class="fas fa-parking"></i>
              </a>
            </li>
          </ul>
          <div class="py-sm">
            Designed with 💚 by
            <strong> Hamza Husein </strong>
          </div>
          <div class="py-sm">© FueledUp, 2022. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
