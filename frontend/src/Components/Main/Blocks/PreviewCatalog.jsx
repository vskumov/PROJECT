import CategoryList from "../Catalog/CategoryList";
import BtnAllCat from "./BtnAllCat";

function PreviewCatalog() {
  return (
    <section className="container showcase wmb">
      <div className="showcase__header">
        <h2>Catalog</h2> <BtnAllCat />
      </div>
      <CategoryList limit={4} />
    </section>
  );
}

export default PreviewCatalog;
