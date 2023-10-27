import PageTitle from "./Elements/PageTitle";
import SortingMenu from "./Catalog/SortingMenu";
import ProductList from "./Products/ProductList";

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
