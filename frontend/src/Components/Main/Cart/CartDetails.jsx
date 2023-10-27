import CartForm from "./Elements/CartForm";
import TotalPrice from "./Elements/TotalPrice";

function CartDetails() {
  return (
    <section className="cart__summup">
      <div className="details">
        <h3>Order details</h3>

        <TotalPrice />
        <CartForm />
      </div>
    </section>
  );
}

export default CartDetails;
