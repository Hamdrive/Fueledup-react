import styles from "./Products.module.css";
import Hat from "../../assets/card-img1.png";

export default function ProductCards() {
  return (
    <section
      className={`grid ${styles.grid__cols__auto} ${styles.grid__col__1} ${styles.grid__cols__2} gap-2 my-3 px-md`}>
      <div className={`pos-rel card ${styles.card} mx-auto`}>
        <div className="pos-ab card-badge card-badge-left top-left-pos">
          10% off
        </div>
        <div
          className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn}`}>
          <i className="far fa-heart"></i>
        </div>
        <div className={`${styles.card__img}`}>
          <img src={Hat} alt="vertical card" />
        </div>
        <div className="card-title flex-col flex-grow-1">
          <p className="txt-md txt-bold">MV33 Brimmed Cap</p>
          <p className="txt-reg txt-semibold">Headwear</p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-semibold mr-sm">₹3,099/-</p>
              <s className="strike-color txt-semibold">₹3,400/-</s>
            </div>
            <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
              <i className="fas fa-sm fa-star"></i>
              4.9
            </p>
          </div>
        </div>
        <hr />
        <div className="card-footer flex-around flex-grow-1">
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </div>
      <div className={`pos-rel card ${styles.card} mx-auto`}>
        <div className="pos-ab card-badge card-badge-left top-left-pos">
          10% off
        </div>
        <div
          className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn}`}>
          <i className="far fa-heart"></i>
        </div>
        <div className={`${styles.card__img}`}>
          <img src={Hat} alt="vertical card" />
        </div>
        <div className="card-title flex-col flex-grow-1">
          <p className="txt-md txt-bold">MV33 Brimmed Cap</p>
          <p className="txt-reg txt-semibold">Headwear</p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-semibold mr-sm">₹3,099/-</p>
              <s className="strike-color txt-semibold">₹3,400/-</s>
            </div>
            <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
              <i className="fas fa-sm fa-star"></i>
              4.9
            </p>
          </div>
        </div>
        <hr />
        <div className="card-footer flex-around flex-grow-1">
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </div>
      <div className={`pos-rel card ${styles.card} mx-auto`}>
        <div className="pos-ab card-badge card-badge-left top-left-pos">
          10% off
        </div>
        <div
          className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn}`}>
          <i className="far fa-heart"></i>
        </div>
        <div className={`${styles.card__img}`}>
          <img src={Hat} alt="vertical card" />
        </div>
        <div className="card-title flex-col flex-grow-1">
          <p className="txt-md txt-bold">MV33 Brimmed Cap</p>
          <p className="txt-reg txt-semibold">Headwear</p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-semibold mr-sm">₹3,099/-</p>
              <s className="strike-color txt-semibold">₹3,400/-</s>
            </div>
            <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
              <i className="fas fa-sm fa-star"></i>
              4.9
            </p>
          </div>
        </div>
        <hr />
        <div className="card-footer flex-around flex-grow-1">
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </div>
      <div className={`pos-rel card ${styles.card} mx-auto`}>
        <div
          className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
          <p
            className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
            Out&nbsp;Of Stock
          </p>
        </div>
        <div className="pos-ab card-badge card-badge-left top-left-pos">
          10% off
        </div>
        <div
          className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn}`}>
          <i className="far fa-heart"></i>
        </div>
        <div className={`${styles.card__img}`}>
          <img src={Hat} alt="vertical card" />
        </div>
        <div className="card-title flex-col flex-grow-1">
          <p className="txt-md txt-bold">MV33 Brimmed Cap</p>
          <p className="txt-reg txt-semibold">Headwear</p>
          <div className="flex-row align-center mt-1">
            <div className="dis-flex flex-wrap align-center">
              <p className="txt-md txt-semibold mr-sm">₹3,099/-</p>
              <s className="strike-color txt-semibold">₹3,400/-</s>
            </div>
            <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
              <i className="fas fa-sm fa-star"></i>
              4.9
            </p>
          </div>
        </div>
        <hr />
        <div className="card-footer flex-around flex-grow-1">
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
