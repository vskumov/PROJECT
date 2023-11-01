import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortParams } from "../../../../actions/sortAndFilterActions";

import "./_sortmenu.scss";
import PriceInput from "./PriceInput";
import SortSelect from "./SortSelect";
import SortCheckbox from "./SortCheckbox";

function SortingMenu({ isHidden }) {
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
      <PriceInput
        minPrice={minPrice}
        maxPrice={maxPrice}
        handlePriceFromChange={handlePriceFromChange}
        handlePriceToChange={handlePriceToChange}
      />
      <SortCheckbox
        isHidden={isHidden}
        handleShowDiscountChange={handleShowDiscountChange}
      />
      <SortSelect handleSortTypeChange={handleSortTypeChange} />
    </form>
  );
}

export default SortingMenu;
