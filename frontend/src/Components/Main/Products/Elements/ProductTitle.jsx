import { typographer } from "../../../../utils/typographer";

function ProductTitle({ title }) {
  return (
    <div className="product-page__header">
      <h2>{typographer(title)}</h2>
    </div>
  );
}

export default ProductTitle;
