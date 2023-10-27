import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortParams } from "../../../actions/sortAndFilterActions";

import "./_sortmenu.scss";

function SortingMenu({ isHided }) {
  const dispatch = useDispatch();
  const sortParams = useSelector((state) => state.sort);

  const [minPrice, setMinPrice] = useState(sortParams.priceFrom || "");
  const [maxPrice, setMaxPrice] = useState(sortParams.priceTo || 0);

  const handlePriceFromChange = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
    setMaxPrice(Number(newMinPrice) + 20);
    dispatch(
      setSortParams({
        ...sortParams,
        priceFrom: newMinPrice,
        priceTo: Number(newMinPrice) + 20,
      })
    );
  };

  const handlePriceToChange = (e) => {
    setMaxPrice(e.target.value);
    dispatch(setSortParams({ ...sortParams, priceTo: e.target.value }));
  };

  const handleSortTypeChange = (e) => {
    const value = e.target.value;
    dispatch(
      setSortParams({
        ...sortParams,
        sorted:
          value === "" ? null : value === "asc" ? "price-up" : "price-down",
      })
    );
  };

  const handleShowDiscountChange = (e) => {
    dispatch(setSortParams({ ...sortParams, sale: e.target.checked }));
  };

  return (
    <form className="sorting-menu">
      <div className="sorting-menu__param">
        <span className="label">Price:</span>
        <input
          type="number"
          min="0"
          max="999"
          placeholder="From"
          value={minPrice}
          onChange={handlePriceFromChange}
        />
        <input
          type="number"
          min={minPrice === "" ? 0 : minPrice}
          max="999"
          placeholder={maxPrice === 0 ? "To" : undefined}
          value={maxPrice !== 0 ? maxPrice : ""}
          onChange={handlePriceToChange}
        />
      </div>

      {!isHided && (
        <div className="sorting-menu__param">
          <label htmlFor="discount-check">Sale: </label>
          <input
            id="discount-check"
            name="discount-check"
            type="checkbox"
            className="custom-checkbox"
            onChange={handleShowDiscountChange}
          />
        </div>
      )}

      <div className="sorting-menu__param">
        <label htmlFor="sorted">Sort by:</label>
        <select id="sorted" name="sorted" onChange={handleSortTypeChange}>
          <option value=""> — </option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </form>
  );
}

export default SortingMenu;
