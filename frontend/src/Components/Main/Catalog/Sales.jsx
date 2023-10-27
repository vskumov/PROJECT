import PageTitle from "../Elements/PageTitle";
import SortingMenu from "../Elements/SortingMenu/SortingMenu";
import ProductList from "../Products/ProductList";

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
