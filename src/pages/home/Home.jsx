import { Navbar, Footer } from "../../components/index";
import Categories from "./Categories";
import Collections from "./Collections";
import HeroSection from "./HeroSection";
import styles from "./Home.module.css";
import "../../styles/utils.css";

export function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <main>
          <section className={styles.hero__section}>
            <HeroSection />
          </section>
          <section className="my-2 px-lg">
            <Categories />
            <Collections />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
