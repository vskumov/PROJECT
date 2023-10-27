import { useEffect } from "react";
import CategoryList from "./CategoryList";
import PageTitle from "../Elements/PageTitle";

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container showcase">
      <PageTitle title="Catalog" />
      <CategoryList />
    </main>
  );
}

export default Catalog;
