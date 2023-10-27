import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/productActions";
import { filterAndSortProducts } from "../../../utils/productUtils";
import { setSortParams } from "../../../actions/sortAndFilterActions";

import ProductCard from "./ProductCard";

function ProductList({ categoryId, discounted, limit }) {
  const allProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const sortParams = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(
      setSortParams({
        priceFrom: null,
        priceTo: null,
        sorted: null,
        sale: false,
      })
    );
  }, [dispatch]);

  const products = useMemo(() => {
    const initialProducts = [...allProducts];
    return filterAndSortProducts(
      initialProducts,
      sortParams,
      categoryId,
      discounted,
      limit
    );
  }, [allProducts, sortParams, categoryId, discounted, limit]);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          discont_price={product.discont_price}
        />
      ))}
    </>
  );
}

export default ProductList;
