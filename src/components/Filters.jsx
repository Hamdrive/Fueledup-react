import { useProducts } from "../utils/product-context";

export function Filters() {
  const { state, dispatch } = useProducts();
  return (
    <aside className="min-vh-85 filters top-left-pos pl-2 border-r-2 mob-aside">
      <header className="pos-st flex-between mb-1 px-md mob-header">
        <h4 className="txt-black">Filters</h4>
        <button onClick={()=>dispatch({type: "CLEAR"})} className="btn btn-sm btn-sec px-md">Clear</button>
      </header>
      <section className="filter-section mob-hide">
        <section className="mt-2 px-md">
          <h4 className="txt-black">Price</h4>
          <article>
            <input
              type="range"
              min="0"
              max="10000"
              step="2500"
              value={state.priceRange}
              list="tickmarks"
              className="slider"
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
            />
            <datalist id="tickmarks" className="flex-between txt-sm">
              <option value="0" className="txt-semibold" label="0"></option>
              <option value="2500" className="hide"></option>
              <option value="5000" className="txt-semibold" label="5K"></option>
              <option value="7500" className="hide"></option>
              <option
                value="10000"
                className="txt-semibold"
                label="10K"></option>
            </datalist>
          </article>
        </section>
        <section className="mt-2 px-md">
          <h4 className="txt-black">Category</h4>

          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.id })
              }
              htmlFor="masks"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="Masks"
                value="Masks"
                checked={state["categories"].includes("Masks")}
              />
              Masks
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.id })
              }
              htmlFor="clothing"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="Clothes"
                value="Clothes"
                checked={state["categories"].includes("Clothes")}
              />
              Clothes
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.id })
              }
              htmlFor="bags"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="Bags"
                value="Bags"
                checked={state["categories"].includes("Bags")}
              />
              Bags
            </label>
          </article>

          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.id })
              }
              htmlFor="headwear"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="Headwear"
                value="Headwear"
                checked={state["categories"].includes("Headwear")}
              />
              Headwear
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.id })
              }
              htmlFor="models"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="Models"
                value="Models"
                checked={state["categories"].includes("Models")}
              />
              Models
            </label>
          </article>
        </section>
        <section className="mt-2 px-md">
          <h4 className="txt-black">Brands</h4>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="headwear"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Alpeene"
                value="Alpeene"
                checked={state["brands"].includes("Alpeene")}
              />
              Alpeene
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="masks"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Alpha-Ball"
                value="Alpha-Ball"
                checked={state["brands"].includes("Alpha-Ball")}
              />
              Alpha-Ball
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="clothing"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Anton Marten"
                value="Anton Marten"
                checked={state["brands"].includes("Anton Marten")}
              />
              Anton Marten
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="bags"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="BcLaren"
                value="BcLaren"
                checked={state["brands"].includes("BcLaren")}
              />
              BcLaren
            </label>
          </article>

          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="models"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Merdeces"
                value="Merdeces"
                checked={state["brands"].includes("Merdeces")}
              />
              Merdeces
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="models"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Purrari"
                value="Purrari"
                checked={state["brands"].includes("Purrari")}
              />
              Purrari
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="models"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Red-Ball"
                value="Red-Ball"
                checked={state["brands"].includes("Red-Ball")}
              />
              Red-Ball
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "BRAND", payload: e.target.id })
              }
              htmlFor="models"
              className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="brand"
                id="Welleams"
                value="Welleams"
                checked={state["brands"].includes("Welleams")}
              />
              Welleams
            </label>
          </article>
        </section>
        <section className="mt-2 px-md">
          <h4 className="txt-black">Ratings</h4>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "RATING", payload: e.target.id })
              }
              htmlFor="review-4"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="4"
                checked={state.ratings === "4"}
              />
              4 Stars & above
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "RATING", payload: e.target.id })
              }
              htmlFor="review-3"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="3"
                checked={state.ratings === "3"}
              />
              3 Stars & above
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "RATING", payload: e.target.id })
              }
              htmlFor="review-2"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="2"
                checked={state.ratings === "2"}
              />
              2 Stars & above
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={(e) =>
                dispatch({ type: "RATING", payload: e.target.id })
              }
              htmlFor="review-1"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="1"
                checked={state.ratings === "1"}
              />
              1 Star & above
            </label>
          </article>
        </section>
        <section className="mt-2 px-md">
          <h4 className="txt-black">Sort by</h4>
          <article className="mx-1 py-sm">
            <label
              onChange={() => dispatch({ type: "HIGH", payload: "HIGH" })}
              htmlFor="sort-high"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="sort"
                id="sort-high"
                checked={state.priceSort === "HIGH"}
              />
              High to Low
            </label>
          </article>
          <article className="mx-1 py-sm">
            <label
              onChange={() => dispatch({ type: "LOW", payload: "LOW" })}
              htmlFor="sort-low"
              className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="sort"
                id="sort-low"
                checked={state.priceSort === "LOW"}
              />
              Low to High
            </label>
          </article>
        </section>
      </section>
    </aside>
  );
}
