import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

const RouteLinks = () => {
  return (
    <Routes>
      <Route path="/nike_webshop" element={<Home />} />
      <Route path="/nike_webshop/catalog/:slug" element={<Product />} />
      <Route path="/nike_webshop/catalog" element={<Catalog />} />
      <Route path="/nike_webshop/cart" element={<Cart />} />
    </Routes>
  );
};

export default RouteLinks;
