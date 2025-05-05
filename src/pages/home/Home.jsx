import React from "react";
import Layout from "../../components/layout/Layout";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import Testimonials from "../../components/testimonial/Tesimonial";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
    </Layout>
  );
};

export default Home;
