import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../actions/categoryActions";

import PageTitle from "../Elements/PageTitle";
import SortingMenu from "./SortingMenu";
import ProductList from "../Products/ProductList";
import Loading from "../Elements/Loading";

import "./_catalog.scss";

function CategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCategories()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);
  const category = categories.find((cat) => cat.id === +categoryId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="container showcase">
      <PageTitle title={category.title} />
      <SortingMenu />
      <ProductList categoryId={categoryId} />
    </main>
  );
}

export default CategoryPage;
