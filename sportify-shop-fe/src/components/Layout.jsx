// Layout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";
import RouteLinks from "../routes/Routes";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <RouteLinks />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </div>
  );
};

export default Layout;
