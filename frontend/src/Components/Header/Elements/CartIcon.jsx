import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./_cartIcon.scss";

function CartIcon() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <Link to="/cart" className="cart-icon">
        <i className="las la-shopping-bag"></i>
        {totalQuantity > 0 && (
          <div className="cart-quantity">{totalQuantity}</div>
        )}
      </Link>
    </div>
  );
}

export default CartIcon;
