import PageTitle from "../Elements/PageTitle";
import SortingMenu from "../Elements/SortingMenu/SortingMenu";
import ProductList from "./ProductList";

function Products() {
  return (
    <main className="container showcase wmb">
      <PageTitle title="All Products" />
      <SortingMenu />
      <ProductList />
    </main>
  );
}

export default Products;
