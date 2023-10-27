import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Main/Cart/Cart";
import Catalog from "./Components/Main/Catalog/Catalog";
import CategoryPage from "./Components/Main/Catalog/CategoryPage";
import Products from "./Components/Main/Products/Products";
import ProductPage from "./Components/Main/Products/ProductPage";
import Sales from "./Components/Main/Catalog/Sales";
import NavigationWrapper from "./Components/NavigationWrapper";
import Page404 from "./Components/Main/Elements/Page404";

function App() {
  return (
    <Router>
      <NavigationWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/categories" element={<Catalog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </NavigationWrapper>
    </Router>
  );
}

export default App;
