import React, { useEffect } from "react";
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
import axios from "axios";

const Home = () => {
  const init = async () => {
    try {
      const result = await axios.get("https://pm-api.flexioncloud.com:8501");
      console.log("res-good", result);
    } catch (error) {
      console.log("res-err", error);
    }
  };
  useEffect(() => {
    init();
  }, []);
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
