function SortSelect({ handleSortTypeChange }) {
  return (
    <div className="sorting-menu__param">
      <label htmlFor="sorted">Sort by:</label>
      <select id="sorted" name="sorted" onChange={handleSortTypeChange}>
        <option value=""> — </option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortSelect;
