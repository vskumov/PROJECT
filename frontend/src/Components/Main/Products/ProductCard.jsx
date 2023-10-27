import { useNavigate } from "react-router-dom";
import { typographer } from "../../../utils/typographer";
import { useDispatch } from "react-redux";
import { addItem } from "../../../actions/cartActions";

import AddToCartButton from "./AddToCartButton";

import "./_product.scss";

function ProductCard({
  product,
  title,
  price,
  image,
  discont_price,
  id,
  quantity,
}) {
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );

  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/products/${id}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      goToProduct();
    }
  };

  const dispatch = useDispatch();

  function handleAddToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addItem(product));
  }

  return (
    <div className="product-box">
      <article
        className="product-card"
        onClick={goToProduct}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex="0"
      >
        <div className="img-container">
          <figure className="product-card__img">
            <img src={`http://localhost:3333/${image}`} alt={title} />
          </figure>
          <AddToCartButton onClick={(event) => handleAddToCart(event, id)} />
        </div>

        {discont_price === null ? (
          <div className="product-card__price">
            <span className="price">
              {price} <span className="currency">$</span>
            </span>
          </div>
        ) : (
          <div className="product-card__price">
            <span className="price">
              {discont_price} <span className="currency">$</span>
            </span>
            <span className="old-price">
              {price} <span className="currency">$</span>
            </span>
            <span className="discont">- {discountPercentage}%</span>
          </div>
        )}

        <p className="product-card__name">{typographer(title)}</p>
      </article>
    </div>
  );
}

export default ProductCard;
