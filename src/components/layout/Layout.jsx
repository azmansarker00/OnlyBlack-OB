import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Faqs from "../faqs/Faqs";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Faqs />
      <Footer />
    </div>
  );
};

export default Layout;
