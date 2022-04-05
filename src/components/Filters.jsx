import { useProducts } from "../context/product-context";
import { useState, useEffect } from "react";

export function Filters({setisOverflow}) {
  const [isFilterOpen, setisFilterOpen] = useState(false);
  const { state, dispatch } = useProducts();

  const toggleFilter = () => {
    setisFilterOpen((prev) => !prev);
    setisOverflow((prev) => !prev)
  };

  return (
    <aside className={`filters ${isFilterOpen ? "mob-show-filters" : ""}`}>
      <div className="mobile-filter flex-center h-100 ">
        <div className={` ${isFilterOpen && "w-100 flex-between gap-5 px-md"}`}>
          <button onClick={() => toggleFilter()} className="btn btn-def btn-md">
            <i className="fas fa-sm fa-filter"></i>
            Filters
          </button>
          {isFilterOpen && (
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="btn btn-md btn-wish px-md mobile-show-clear">
              Clear
            </button>
          )}
        </div>
      </div>
      <div className="w-100 flex-between mb-1 px-md desktop-filter">
        <h4 className="txt-black">Filters</h4>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="btn btn-sm btn-sec px-md">
          Clear
        </button>
      </div>
      <section className="filter-section">
        <section className="mt-2">
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
        <section className="mt-2">
          <h4 className="txt-black">Category</h4>

          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="category"
                id="Masks"
                value="Masks"
                checked={state["categories"].includes("Masks")}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.id,
                    },
                  })
                }
              />
              Masks
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="category"
                id="Clothes"
                value="Clothes"
                checked={state["categories"].includes("Clothes")}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.id,
                    },
                  })
                }
              />
              Clothes
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="category"
                id="Bags"
                value="Bags"
                checked={state["categories"].includes("Bags")}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.id,
                    },
                  })
                }
              />
              Bags
            </label>
          </article>

          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="category"
                id="Headwear"
                value="Headwear"
                checked={state["categories"].includes("Headwear")}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.id,
                    },
                  })
                }
              />
              Headwear
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="category"
                id="Models"
                value="Models"
                checked={state["categories"].includes("Models")}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.id,
                    },
                  })
                }
              />
              Models
            </label>
          </article>
        </section>
        <section className="mt-2">
          <h4 className="txt-black">Brands</h4>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Alpeene"
                value="Alpeene"
                checked={state["brands"].includes("Alpeene")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Alpeene
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Alpha-Ball"
                value="Alpha-Ball"
                checked={state["brands"].includes("Alpha-Ball")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Alpha-Ball
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Anton Marten"
                value="Anton Marten"
                checked={state["brands"].includes("Anton Marten")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Anton Marten
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="BcLaren"
                value="BcLaren"
                checked={state["brands"].includes("BcLaren")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              BcLaren
            </label>
          </article>

          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Merdeces"
                value="Merdeces"
                checked={state["brands"].includes("Merdeces")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Merdeces
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Purrari"
                value="Purrari"
                checked={state["brands"].includes("Purrari")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Purrari
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Red-Ball"
                value="Red-Ball"
                checked={state["brands"].includes("Red-Ball")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Red-Ball
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="checkbox"
                className="checkbox mr-1"
                name="brand"
                id="Welleams"
                value="Welleams"
                checked={state["brands"].includes("Welleams")}
                onChange={(e) =>
                  dispatch({ type: "BRAND", payload: e.target.id })
                }
              />
              Welleams
            </label>
          </article>
        </section>
        <section className="mt-2">
          <h4 className="txt-black">Ratings</h4>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="review"
                id="4"
                checked={state.ratings === "4"}
                onChange={(e) =>
                  dispatch({ type: "RATING", payload: e.target.id })
                }
              />
              4 Stars & above
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="review"
                id="3"
                checked={state.ratings === "3"}
                onChange={(e) =>
                  dispatch({ type: "RATING", payload: e.target.id })
                }
              />
              3 Stars & above
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="review"
                id="2"
                checked={state.ratings === "2"}
                onChange={(e) =>
                  dispatch({ type: "RATING", payload: e.target.id })
                }
              />
              2 Stars & above
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="review"
                id="1"
                checked={state.ratings === "1"}
                onChange={(e) =>
                  dispatch({ type: "RATING", payload: e.target.id })
                }
              />
              1 Star & above
            </label>
          </article>
        </section>
        <section className="mt-2 mb-2">
          <h4 className="txt-black">Sort by</h4>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="sort"
                id="sort-high"
                checked={state.priceSort === "HIGH"}
                onChange={() => dispatch({ type: "HIGH", payload: "HIGH" })}
              />
              High to Low
            </label>
          </article>
          <article className="mx-sm py-sm">
            <label className="txt-reg txt-semibold">
              <input
                type="radio"
                className="radiobutton mr-1"
                name="sort"
                id="sort-low"
                checked={state.priceSort === "LOW"}
                onChange={() => dispatch({ type: "LOW", payload: "LOW" })}
              />
              Low to High
            </label>
          </article>
        </section>
      </section>
    </aside>
  );
}
