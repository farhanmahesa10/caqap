import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import {
  ContactAdress,
  ContactHero,
  ContactSchedule,
} from "../components/organisms";

const Contact = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactSchedule />
      <ContactAdress />
    </MainLayout>
  );
};

export default Contact;
