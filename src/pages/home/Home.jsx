// import "./home.css";
import Banner from "../../assets/hero-image.webp";
import { Navbar } from "../../components/Navbar";
import Categories from "./Categories";
import Collections from "./Collections";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import "../../styles/utils.css"

export default function Home() {
  return (
    <div class="wrapper">
      <Navbar />
      <div class="main">
        <main>
          <section className={styles.hero__section}>
            <div className={styles.hero}>
              <img src={Banner} alt="hero-image" />
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
              <Link to="/products">
                <button class="btn btn-product btn-cta btn-md flex-center txt-bold txt-reg w-60 mx-auto mt-1 mb-1 txt-wrap">
                  <i class="fas fa-flag-checkered txt-md rotate-icon"></i>
                  Check out Products
                </button>
              </Link>
            </div>
          </section>
          <section class="my-2 px-lg">
            <Categories />
            <Collections />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
