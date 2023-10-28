import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../../actions/cartActions";
import InputMask from "react-input-mask";

function CartForm() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);


  const handleChange = () => {
    setShowAlert(false);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.elements[0].value;

    if (phoneNumber.includes("_")) {
      setShowAlert(true);
      return;
    }

    dispatch(createOrder(phoneNumber));
  };

  return (
    <>
      <form className="details-form" onSubmit={handleOrder}>
        <InputMask
          maskChar={"_"}
          mask="+4\9 99 999 999 99"
          placeholder="Enter your phone number"
          onChange={handleChange}
          name="phone-in-cart"
          id="phone-in-cart"
          required
        />
        {showAlert && (
          <span className="alert">Please enter the full phone number.</span>
        )}
        <button type="submit">Order</button>
      </form>
    </>
  );
}

export default CartForm;
