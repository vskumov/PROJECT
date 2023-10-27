import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../actions/cartActions";

import EmptyCart from "./Elements/EmptyCart";
import CartDetails from "./CartDetails";
import CartBox from "./CartBox";

import "./_cart.scss";
import SuccessOrderModal from "./Elements/SuccessOrderModal";

function Cart() {
  const cartList = useSelector((state) => state.cart);
  const isModalOpen = useSelector((state) => state.cart.isModalOpen);
  const dispatch = useDispatch();

  return (
    <main className="container cart wmb">
      <div className="cart__header">
        <h2>Shopping cart</h2>
        <Link to="/catalog">
          <i className="las la-arrow-left"></i> back to the store
        </Link>
      </div>

      {cartList.cartList.length > 0 ? (
        <>
          <CartBox />
          <CartDetails />
        </>
      ) : (
        <EmptyCart />
      )}

      {isModalOpen && (
        <SuccessOrderModal setModal={() => dispatch(toggleModal(false))} />
      )}
    </main>
  );
}

export default Cart;
