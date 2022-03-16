import { Link } from "react-router-dom";
import "../styles/footer.css"

export function Footer() {
  return (
    <div className="py-md footer footer-doc">
      <footer className="max-width-1200 grid grid-cols-2 gap-2 grid-ver-center mx-auto px-lg">
        <div className="footer-info">
          <div className="footer-social py-sm">Quick&nbsp;Links</div>
          <ul className="footer-social-icons grid grid-col-1 gap-1 py-sm">
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
        <div className="footer-brief">
          <div className="footer-social py-sm">Socials</div>
          <ul className="footer-social-icons dis-flex gap-2 py-sm">
            <li>
              <a href="https://github.com/Hamdrive">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/itsHamhere">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hamza-husein/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://peerlist.io/hamza">
                <i className="fas fa-parking"></i>
              </a>
            </li>
          </ul>
          <div className="py-sm">
            Designed with 💚 by
            <strong> Hamza Husein </strong>
          </div>
          <div className="py-sm">© FueledUp, 2022. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
