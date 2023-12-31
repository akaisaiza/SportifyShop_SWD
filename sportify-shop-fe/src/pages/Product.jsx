import React, { useEffect } from "react";

import Helmet from "./../components/Helmet";
import Section, { SectionTitle, SectionBody } from "./../components/Section";
import Grid from "./../components/Grid";
import ProductCard from "./../components/ProductCard";
import ProductView from "./../components/ProductView";

import productData from "./../assets/fake-data/products";
import { useParams } from 'react-router-dom';
const Product = () => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);

  const relateProducts = productData.getProducts(8);

  return (
    <Helmet title={product.title}>
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
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
