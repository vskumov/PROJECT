export const filterAndSortProducts = (initialProducts, sortParams, categoryId, discounted, limit) => {

  let products = discounted
    ? initialProducts.filter((product) =>
      product.discont_price !== null)
    : [...initialProducts];


  if (categoryId) {
    products = products.filter((product) =>
      product.categoryId === +categoryId);
  }

  if (limit) {
    products = products.slice(0, limit);
  }

  if (sortParams.sale) {
    products = products.filter((product) =>
      product.discont_price !== null);
  }

  products = products.filter((product) => {
    const price = product.discont_price !== null
      ? product.discont_price
      : product.price;
    return (
      (!sortParams.priceFrom || price >= sortParams.priceFrom) &&
      (!sortParams.priceTo || price <= sortParams.priceTo)
    );
  });

  if (sortParams.sorted === "price-up") {
    // products.sort((a, b) => a.price - b.price);
    products.sort((a, b) => {
      const priceA = a.discont_price !== null
        ? a.discont_price
        : a.price;

      const priceB = b.discont_price !== null
        ? b.discont_price
        : b.price;

      return priceA - priceB;
    })
  }

  if (sortParams.sorted === "price-down") {
    products.sort((a, b) => {
      const priceA = a.discont_price !== null
        ? a.discont_price
        : a.price;

      const priceB = b.discont_price !== null
        ? b.discont_price
        : b.price;

      return priceB - priceA;
    });
  }

  return products;
};