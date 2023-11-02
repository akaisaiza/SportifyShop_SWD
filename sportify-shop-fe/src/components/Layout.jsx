// Layout.js
import React ,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";
import RouteLinks from "../routes/Routes";
import LoginPage from "./LoginPage";
const Layout = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <LoginPage setToken={setToken} />
  }
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
