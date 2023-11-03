import React, { useCallback, useState, useEffect, useRef } from "react";
import Helmet from "./../components/Helmet";
import CheckBox from "./../components/CheckBox";
import Button from "./../components/Button";
import InfinityList from "./../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(initFilter);

  // Function to fetch product data from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts();
  }, []);

  const filterSelect = (type, checked, item) => {
    // Your filterSelect logic remains the same
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    // Your updateProducts logic remains the same
  }, [filter, products]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="Product">
      <div className="catalog">
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
