import { useState } from "react";
import "./_addToCartButton.scss";

function AddToCartButton({ onClick }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <button className="add-btn as-btn" onClick={handleClick}>
      {isAdded ? <>Added {"\u2713"}</> : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
