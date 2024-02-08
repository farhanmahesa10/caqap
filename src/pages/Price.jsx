import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import {
  PriceFAQ,
  PriceHero,
  PricePackages,
  PriceSales,
  PriceUMKM,
} from "../components/organisms";

const Price = () => {
  return (
    <MainLayout activePage="harga">
      <PriceHero />
      <PricePackages />
      <PriceUMKM />
      <PriceFAQ />
      <PriceSales />
    </MainLayout>
  );
};

export default Price;
