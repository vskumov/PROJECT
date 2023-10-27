import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../actions/productActions";

import Page404 from "../Page404";
import Loading from "../Elements/Loading";
import ProductTitle from "./Elements/ProductTitle";
import ProductImage from "./Elements/ProductImage";
import ProductDescription from "./Elements/ProductDescription";
import ProductPrice from "./Elements/ProductPrice";
import ProductButton from "./Elements/ProductButton";

import "./_productPage.scss";
import "../../../styles/_decoration.scss";

function ProductPage() {
  const products = useSelector((state) => state.products.products);
  const cartList = useSelector((state) => state.cart.cartList);

  const dispatch = useDispatch();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProducts()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const thisProduct = products.find((product) => product.id === +id);
  const thisProductInCart = cartList.find((product) => product.id === +id);

  if (!thisProduct) {
    return <Page404 />;
  }

  return (
    <section className="container product-page">
      <ProductTitle title={thisProduct.title} />
      <ProductImage image={thisProduct.image} title={thisProduct.title} />

      <div className="product-page__info">
        <ProductPrice product={thisProduct} />
        <ProductButton
          product={thisProduct}
          productId={thisProduct.id}
          inCart={thisProductInCart}
          quantity={
            typeof thisProductInCart === "undefined"
              ? "0"
              : thisProductInCart.quantity
          }
        />
        <ProductDescription description={thisProduct.description} />
      </div>
    </section>
  );
}

export default ProductPage;
