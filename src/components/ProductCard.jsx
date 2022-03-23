import { useAuthProducts } from "../context/auth-products-context";
import styles from "../pages/products/Products.module.css";

export default function ProductCard({ product }) {
  const { state, dispatch } = useAuthProducts();

  return (
    <div className={`pos-rel card ${styles.card} mx-auto`}>
      {!product.inStock && (
        <div
          className={`brief-overlay ${styles.brief__overlay} pos-ab top-left-pos`}>
          <p
            className={`overlay-text ${styles.overlay__text} pos-ab txt-black mx-auto txt-center`}>
            Out&nbsp;Of Stock
          </p>
        </div>
      )}
      <div className="pos-ab card-badge card-badge-left top-left-pos">
        {product.productDiscount}% off
      </div>
      <div
        className={`pos-ab ${styles.top__right__pos} flex-center ${styles.border__circle} ${styles.wish__heart__btn}`}>
        {state["wishlist"].some((item) => item._id === product._id) ? (
          <i
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
            }
            className={`fa fa-heart ${styles.fill} `}></i>
        ) : (
          <i
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: product })
            }
            className="far fa-heart "></i>
        )}
      </div>
      <div className={`${styles.card__img}`}>
        <img src={product.productImage} alt="vertical card" />
      </div>
      <div className="card-title flex-col flex-grow-1">
        <p className="txt-md txt-bold">{product.title}</p>
        <p className="txt-reg txt-semibold">
          {product.team} - {product.categoryName}
        </p>
        <div className="flex-row align-center mt-1">
          <div className="dis-flex flex-wrap align-center">
            <p className="txt-md txt-semibold mr-sm">
              ₹ {product.productDiscountPrice}
            </p>
            <s className="strike-color txt-semibold">₹{product.price}</s>
          </div>
          <p className="flex-basis-20 txt-sm txt-bold ml-auto rating">
            <i className="fas fa-sm fa-star"></i>
            {product.productRating}
          </p>
        </div>
      </div>
      <hr />
      <div className="card-footer flex-around flex-grow-1">
        {state["cart"].some((item) => item.id === product._id) ? (
          <button className="btn btn-wish btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            go to cart
          </button>
        ) : state["wishlist"].some((item) => item.id === product._id) ? (
          <button className="btn btn-wish btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            move to cart
          </button>
        ) : (
          <button className="btn btn-atc btn-cta btn-md txt-bold txt-reg w-100">
            <i className="fas fa-shopping-cart"></i>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}
