import { useDispatch } from "react-redux";
import { createOrder } from "../../../../actions/cartActions";
import InputMask from "react-input-mask";

function CartForm() {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.elements[0].value;
    dispatch(createOrder(phoneNumber));
  };

  return (
    <>
      <form className="details-form" onSubmit={handleOrder}>
        <InputMask
          mask="+4\9 99 999 999 99"
          placeholder="Enter your phone number"
          required
          name="phone-in-cart"
          id="phone-in-cart"
        />
        <button type="submit">Order</button>
      </form>
    </>
  );
}

export default CartForm;
