import { useDispatch } from "react-redux";
import {
  addItem,
  decrementItem,
  deleteItem,
} from "../../../../actions/cartActions";

import AddMoreOrDelete from "../../Products/AddMoreOrDelete";

import "./_deleteFromCart.scss";
import "./_productInCart.scss";

function ProductInCart({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-in-cart">
      <button
        className="deleteFromCart"
        onClick={() => dispatch(deleteItem(product.id))}
      >
        <i className="las la-times"></i>
      </button>

      <div className="product-in-cart__img">
        <img
          src={`http://localhost:3333${product.image}`}
          alt={product.title}
        />
      </div>

      <div className="product-in-cart__info">
        <h3>{product.title}</h3>

        <div className="product-in-cart__info-price-and-options">
          <AddMoreOrDelete
            // onAdd={() => dispatch(addItem(product.id))}
            onAdd={() => dispatch(addItem(product))}
            onSubtract={() => dispatch(decrementItem(product.id))}
            className="in-cart"
            quantity={product.quantity}
          />

          <div className="totalprice">
            <span className="old-price">
              {product.discont_price
                ? (product.price * product.quantity).toFixed(2)
                : null}
            </span>
            <span className="price-l">
              {(product.discont_price
                ? product.discont_price * product.quantity
                : product.price * product.quantity
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
