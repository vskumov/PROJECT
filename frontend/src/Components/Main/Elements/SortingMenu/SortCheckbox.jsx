
function SortCheckbox({ isHided, handleShowDiscountChange }) {
    if (isHided) return null;
    return (
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
    );
  }

export default SortCheckbox;