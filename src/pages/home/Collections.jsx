import Collection1 from "../../assets/collection-1.png";
import Collection2 from "../../assets/collection-2.png";
import styles from "./Home.module.css";

export default function Collections() {
  return (
    <section className="recent-products py-md">
      <h3>
        Browse various
        <span className={styles.imp__word}> collections </span>
        ...
      </h3>
      <div className="collections flex-wrap flex-row gap-1 mx-auto">
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img className="w-100 blur" src={Collection1} alt="cleareance" />
          <div className={`pos-ab ${styles.collection__cover__text} px-sm txt-lg txt-bold`}>
            Clearance SALE
          </div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img className="w-100 blur" src={Collection2} alt="2020 season apparel" />
          <div className={`pos-ab ${styles.collection__cover__text} px-sm txt-lg txt-bold`}>
            2022 Season Apparel
          </div>
        </div>
      </div>
    </section>
  );
}
