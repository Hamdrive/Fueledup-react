import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import "../../styles/utils.css";

export default function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
        <img
          src="https://res.cloudinary.com/fueledup-ecom/image/upload/v1647392757/Hero%20Image/hero-image.webp"
          alt="hero-image"
        />
      </div>
      <div className={`${styles.hero__overlay} pos-ab flex-column`}>
        <h1>
          For the love of
          <em> racing </em>
        </h1>
        <h2>
          Driven by fans,
          <em> FueledUp </em>
          by fans.
        </h2>
        <Link
          to="/products"
          className="btn btn-cta btn-lg flex-center txt-bold txt-reg w-60 mx-auto mt-1 mb-1 txt-center txt-wrap">
            <i className="fas fa-flag-checkered txt-md rotate-icon"></i>
            Check out Products
        </Link>
      </div>
    </>
  );
}
