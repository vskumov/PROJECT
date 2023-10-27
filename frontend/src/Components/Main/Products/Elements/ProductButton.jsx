import { useDispatch } from "react-redux";
import { addItem, decrementItem } from "../../../../actions/cartActions";

import AddMoreOrDelete from "../AddMoreOrDelete";
import AddToCartButton from "../AddToCartButton";

const ProductButton = ({ product, productId, inCart, quantity }) => {
  const dispatch = useDispatch();

  function handleAddToCart(event, id) {
    event.preventDefault();
    dispatch(addItem(product));
  }

  if (typeof inCart === "undefined") {
    return (
      <AddToCartButton onClick={(event) => handleAddToCart(event, productId)} />
    );
  } else {
    return (
      <AddMoreOrDelete
        onAdd={() => dispatch(addItem(product))}
        onSubtract={() => dispatch(decrementItem(productId))}
        className="prod-page"
        quantity={quantity}
      />
    );
  }
};

export default ProductButton;
