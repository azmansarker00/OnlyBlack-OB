import React from "react";
import Layout from "../../components/layout/Layout";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonial/Tesimonial";
import Faqs from "../../components/faqs/Faqs";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <Faqs />
    </Layout>
  );
};

export default Home;
