import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../actions/categoryActions";

import PageTitle from "../Elements/PageTitle";
import SortingMenu from "../Elements/SortingMenu/SortingMenu";
import ProductList from "../Products/ProductList";
import Loading from "../Elements/Loading";
import Page404 from "../Elements/Page404";

import "./_catalog.scss";

function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const categories = useSelector((state) => state.categories.categories);
  const category = categories.find((cat) => cat.id === +categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCategories()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!category) {
    return <Page404 />;
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
