import Bottles from "../../assets/category-7.png";
import Models from "../../assets/category-1.png";
import Masks from "../../assets/category-2.png";
import Clothing from "../../assets/category-3.png";
import Bags from "../../assets/category-4.png";
import Eyewear from "../../assets/category-5.png";
import Headwear from "../../assets/category-6.png";
import styles from "./Home.module.css"


export default function Categories() {
  return (
    <section class="categories">
      <h3>
        Check out various
        <span className={styles.imp__word}> categories </span>
      </h3>
      <div class="category-list flex-wrap flex-row gap-1">
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Bottles} alt="bottles" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Bottles</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Masks} alt="masks" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Masks</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Clothing} alt="clothing" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Clothing</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Bags} alt="bags" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Bags</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Eyewear} alt="eyewear" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Eyewear</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Headwear} alt="headwear" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Headwear</div>
        </div>
        <div className={`${styles.category} flex-center flex-grow-1`}>
          <img class="w-100 blur" src={Models} alt="models" />
          <div className={`pos-ab ${styles.cover__text} txt-lg txt-bold`}>Models</div>
        </div>
      </div>
    </section>
  );
}
