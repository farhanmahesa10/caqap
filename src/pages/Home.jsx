import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import {
  HomeFAQ,
  HomeHero,
  HomeMultiChannel,
  HomeOfficialPartner,
  HomeTestimonial,
  HomeWABusiness,
  HomeOurClient,
  HomeSales,
} from "../components/organisms";

const Home = () => {
  return (
    <MainLayout activePage="beranda">
      <HomeHero />
      <HomeWABusiness />
      <HomeMultiChannel />
      <HomeOfficialPartner />
      <HomeOurClient />
      <HomeTestimonial />
      <HomeFAQ />
      <HomeSales />
    </MainLayout>
  );
};

export default Home;
