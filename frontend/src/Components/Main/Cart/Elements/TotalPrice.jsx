import { useSelector } from "react-redux";

function TotalPrice() {
  const totalSum = useSelector((state) => state.cart.totalSum);
  const hasDiscount = useSelector((state) => state.cart.hasDiscount);

  return (
    <div className="details-total">
      <h5>Total:</h5>

      {hasDiscount ? (
        <div className="details-total__price">
          <span className="no-discount">{totalSum.toFixed(2)}</span>
          <span className="final-price">{(totalSum * 0.95).toFixed(2)}</span>
        </div>
      ) : (
        <div className="details-total__price">
          <span className="final-price">{totalSum.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

export default TotalPrice;
