import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../actions/categoryActions";

import CategoryCard from "./CategoryCard";

function CategoryList({ handleCategoryClick, limit }) {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const displayedCategories = limit
    ? categories.categories.slice(0, limit)
    : categories.categories;

  return (
    <>
      {categories.error ? (
        <h3>{categories.error}</h3>
      ) : (
        displayedCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))
      )}
    </>
  );
}

export default CategoryList;
