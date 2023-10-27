import { useEffect } from "react";
import CategoryList from "./Catalog/CategoryList";
import PageTitle from "./Elements/PageTitle";

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container showcase">
      <PageTitle title="Catalo" />
      <CategoryList />
    </main>
  );
}

export default Catalog;
