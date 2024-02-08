import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import {
  CompanyFAQ,
  CompanyHero,
  CompanyOptimal,
  CompanyWhyCaqap,
} from "../components/organisms";

const Company = () => {
  return (
    <MainLayout activePage="perusahaan">
      <CompanyHero />
      <CompanyWhyCaqap />
      <CompanyOptimal />
      <CompanyFAQ />
    </MainLayout>
  );
};

export default Company;
