import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import {
  ProductEfective,
  ProductHero,
  ProductEnhancement,
  ProductPersonalisation,
  ProductSuperiorFeature,
  ProductTestimonial,
  ProductFAQ,
  ProductSales,
} from "../components/organisms";

const Product = () => {
  return (
    <MainLayout activePage="produk">
      <ProductHero />
      <ProductEfective />
      <ProductPersonalisation />
      <ProductEnhancement />
      <ProductSuperiorFeature />
      <ProductTestimonial />
      <ProductFAQ />
      <ProductSales />
    </MainLayout>
  );
};

export default Product;
