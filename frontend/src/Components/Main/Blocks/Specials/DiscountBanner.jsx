import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../../../actions/cartActions";

import InputMask from "react-input-mask";
import DiscountSuccessMessage from "./DiscountSuccessMessage";

import gnom from "../../../../img/gnom.png";

import "./_discountBanner.scss";
import "./_specials.scss";

function DiscountBanner() {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const hasDiscount = useSelector((state) => state.cart.hasDiscount);

  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setPhone(e.target.value);
    setShowAlert(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendDiscountRequest();
  };

  const sendDiscountRequest = () => {
    if (phone.includes("_")) {
      setShowAlert(true);
      return;
    }

    fetch("http://localhost:3333/sale/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setIsSubmitted(true);
          setMessage(data.message);
          dispatch(setDiscount(true));
        } else {
          setIsSubmitted(false);
          setMessage("Something went wrong.");
        }
      })
      .catch((error) => {
        setIsSubmitted(false);
        setMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="full-width gradient-green">
      <div className="container">
        <div className="discount-banner">
          <div className="discount-banner__img">
            <img src={gnom} alt="gnom" />
          </div>

          <div className="discount-banner__offer">
            <span className="offer-xxxl">5% off </span>
            <span className="offer-xl">on the first order</span>
          </div>

          <>
            {isSubmitted || hasDiscount ? (
              <DiscountSuccessMessage
                message={message}
                hasDiscount={hasDiscount}
              />
            ) : (
              <form onSubmit={handleFormSubmit}>
                <InputMask
                  maskChar={"_"}
                  mask="+4\9 99 999 999 99"
                  value={phone}
                  onChange={handleInputChange}
                  name="phone-in-discount"
                  id="phone-in-discount"
                  placeholder="Enter your phone number"
                  required
                />
                {showAlert ? (
                  <span className="alert">
                    Please enter the full phone number.
                  </span>
                ) : (
                  <button type="submit">Get Discount</button>
                )}
              </form>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
