import React from "react";

function PriceInput({
  minPrice,
  maxPrice,
  handlePriceFromChange,
  handlePriceToChange,
}) {
  return (
    <div className="sorting-menu__param">
      <span className="label">Price:</span>
      <input
        type="number"
        min="0"
        max="999"
        placeholder="From"
        value={minPrice}
        onChange={handlePriceFromChange}
        id="price-from"
        name="price-from"
      />
      <input
        type="number"
        min={minPrice === "" ? 0 : minPrice}
        max="999"
        placeholder={maxPrice === 0 ? "To" : undefined}
        value={maxPrice !== 0 ? maxPrice : ""}
        onChange={handlePriceToChange}
        id="price-to"
        name="price-to"
      />
    </div>
  );
}
export default PriceInput;
