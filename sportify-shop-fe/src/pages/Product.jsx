import React, { useEffect, useState } from "react";
import Helmet from "./../components/Helmet";
import Section, { SectionTitle, SectionBody } from "./../components/Section";
import Grid from "./../components/Grid";
import ProductCard from "./../components/ProductCard";
import ProductView from "./../components/ProductView";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relateProducts, setRelateProducts] = useState([]);

  useEffect(() => {
    const productId = props.slug; // Change this to the desired product ID

    // Fetch the specific product data based on its ID
    fetch(`http://localhost:8080/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Failed to fetch product data:", error);
      });

    // Fetch related products or use a separate API endpoint for this
    // Modify the code to fetch related products if needed
  }, []);

  return (
    <Helmet title={product.productName}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Trending Now</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relateProducts.map((item, index) => (
              <ProductCard
                key={index}
                urlImg={item.urlImg}
                productName={item.productName}
                price={Number(item.price)}
                productID={item.productID}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
