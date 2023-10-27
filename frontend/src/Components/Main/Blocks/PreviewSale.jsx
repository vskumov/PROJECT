import ProductList from "../Products/ProductList";

function PreviewSale() {
  return (
    <section className="container showcase wmb">
      <div className="showcase__header">
        <h2>Sale</h2>
      </div>

      <ProductList discounted={true} limit={4} />
    </section>
  );
}

export default PreviewSale;
