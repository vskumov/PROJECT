import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/categories/${category.id}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      goToCategory();
    }
  };

  return (
    <article
      className="category-card"
      onClick={goToCategory}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex="0"
    >
      <img
        src={`http://localhost:3333/${category.image}`}
        alt={category.title}
        className="category-card__img"
      />
      <p className="category-card__txt">{category.title}</p>
    </article>
  );
}

export default CategoryCard;
