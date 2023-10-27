import { typographer } from "../../../../utils/typographer";

function ProductDescription({ description }) {
  return (
    <div className="product-page__info-text">
      <hr className="dashed-line" />
      <h5 className="description-h5">Description</h5>
      <p className="description-text">{typographer(description)}</p>
    </div>
  );
}

export default ProductDescription;
