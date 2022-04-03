import React, { useEffect } from "react";
import { Navbar, Footer } from "../../components/index";
import Categories from "./Categories";
import Collections from "./Collections";
import HeroSection from "./HeroSection";
import styles from "./Home.module.css";
import "../../styles/utils.css";

export function Home() {
  useEffect(() => {
    document.title = `FueledUp - For the love of racing`;
  }, []);
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <main>
          <section className={styles.hero__section}>
            <HeroSection />
          </section>
          <section className="my-3 px-lg">
            <Categories />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
