import SortingMenu from "./Catalog/SortingMenu";
import PageTitle from "./Elements/PageTitle";
import ProductList from "./Products/ProductList";

function Sales() {
  return (
    <main className="container showcase wmb">
      <PageTitle title="Sales" />
      <SortingMenu isHided={true} />
      <ProductList discounted={true} />
    </main>
  );
}
export default Sales;
