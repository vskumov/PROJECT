import { useNavigate } from "react-router-dom";
import { goToCategory, handleKeyPress } from "../../../utils/cardsUtils";

function CategoryCard({ category }) {
  const navigate = useNavigate();
  
  return (
    <article
      className="category-card"
      onClick={() => goToCategory(navigate, category.id)}
      onKeyDown={(event) => handleKeyPress(event, navigate, category.id)}
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
