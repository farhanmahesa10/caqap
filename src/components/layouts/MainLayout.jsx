import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar activePage={props.activePage} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
