function ProductImage({ image, title }) {
  return (
    <div className="product-page__img">
      <img src={`http://localhost:3333${image}`} alt={title} />
    </div>
  );
}

export default ProductImage;
