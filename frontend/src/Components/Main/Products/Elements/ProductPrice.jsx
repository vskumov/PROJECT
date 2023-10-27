function ProductPrice({ product }) {
  const discount = Math.round(
    ((product.price - product.discont_price) / product.price) * 100
  );

  return (
    <div className="product-page__info-price">
      {product.discont_price === null ? (
        <div className="price-info">
          <span className="price-xl">
            {product.price}
            <span className="price-xl-currency"> $</span>
          </span>
        </div>
      ) : (
        <div className="price-info">
          <span className="price-xl">
            {product.discont_price}
            <span className="price-xl-currency"> $</span>
          </span>
          <span className="old-price">{product.price} $</span>
          <span className="discont">- {discount}%</span>
        </div>
      )}
    </div>
  );
}

export default ProductPrice;
