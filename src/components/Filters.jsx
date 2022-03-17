export function Filters(){
    return (
        <aside
        className="min-vh-85 filters top-left-pos pl-2 border-r-2 mob-aside">
        <header className="pos-st flex-between mb-1 px-md mob-header">
          <h4 className="txt-black">Filters</h4>
          <button className="btn btn-sm btn-sec px-md">Clear</button>
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
                list="tickmarks"
                className="slider" />
              <datalist id="tickmarks" className="flex-between txt-sm">
                <option value="0" className="txt-semibold" label="0"></option>
                <option value="2500" className="hide"></option>
                <option
                  value="5000"
                  className="txt-semibold"
                  label="5K"></option>
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
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="bottles" />
              <label htmlFor="bottles" className="txt-reg txt-semibold">
                Bottles
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="masks" />
              <label htmlFor="masks" className="txt-reg txt-semibold">Masks</label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="clothing" />
              <label htmlFor="clothing" className="txt-reg txt-semibold">
                Clothing
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="bags" />
              <label htmlFor="bags" className="txt-reg txt-semibold">Bags</label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="eyewear" />
              <label htmlFor="eyewear" className="txt-reg txt-semibold">
                Eyewear
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="headwear" />
              <label htmlFor="headwear" className="txt-reg txt-semibold">
                Headwear
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="checkbox"
                className="checkbox mr-3"
                name="category"
                id="models" />
              <label htmlFor="models" className="txt-reg txt-semibold">
                Models
              </label>
            </article>
          </section>
          <section className="mt-2 px-md">
            <h4 className="txt-black">Ratings</h4>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="review-4" />
              <label htmlFor="review-4" className="txt-reg txt-semibold">
                4 Stars & above
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="review-3" />
              <label htmlFor="review-3" className="txt-reg txt-semibold">
                3 Stars & above
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="review-2" />
              <label htmlFor="review-2" className="txt-reg txt-semibold">
                2 Stars & above
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="review"
                id="review-1" />
              <label htmlFor="review-1" className="txt-reg txt-semibold">
                1 Star & above
              </label>
            </article>
          </section>
          <section className="mt-2 px-md">
            <h4 className="txt-black">Sort by</h4>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="sort"
                id="sort-high" />
              <label htmlFor="sort-high" className="txt-reg txt-semibold">
                High to Low
              </label>
            </article>
            <article className="mx-1 py-sm">
              <input
                type="radio"
                className="radiobutton mr-3"
                name="sort"
                id="sort-low" />
              <label htmlFor="sort-low" className="txt-reg txt-semibold">
                Low to High
              </label>
            </article>
          </section>
        </section>
      </aside>

    )
}