import { typographer } from "../../../../utils/typographer";
import "./_discountSuccess.scss";

function DiscountSuccessMessage({ hasDiscount }) {
  return (
    <div className="discount-success">
      {hasDiscount ? (
        <p>{typographer("The discount has been received and already applied in the cart!")}</p>
      ) : (
        <p>{typographer("Something went wrong. Please try again!")}</p>
      )}
    </div>
  );
}

export default DiscountSuccessMessage;
