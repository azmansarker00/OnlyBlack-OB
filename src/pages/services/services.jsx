// src/pages/Services.jsx
import React from "react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";

const services = [
  {
    title: "Premium Quality Products",
    description:
      "We offer hand-picked, top-tier products that go through strict quality checks to ensure satisfaction and durability.",
  },
  {
    title: "Fast & Secure Delivery",
    description:
      "Enjoy quick shipping with secure packaging. Track your orders in real-time and get your items delivered to your doorstep without hassle.",
  },
  {
    title: "Easy & Secure Checkout",
    description:
      "Multiple payment options with robust encryption ensure your transaction is smooth, safe, and convenient.",
  },
  {
    title: "Customer-Friendly Return Policy",
    description:
      "Changed your mind? No worries. Our easy return and refund policy is built to protect your satisfaction and rights.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Have questions or issues? Our support team is always available through chat, email, or phone to assist you anytime.",
  },
  {
    title: "Exclusive Offers & Discounts",
    description:
      "Sign up to access members-only deals, seasonal sales, and exclusive OnlyBlack promotions you won’t find elsewhere.",
  },
];

const Services = () => {
  return (
    <Layout>
      <div className="bg-[#161616] text-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
            What Makes OnlyBlack Special
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Explore the core services and promises that make our e-commerce
            experience fast, reliable, and enjoyable.
          </p>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-20 pb-20">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-black hover:bg-[#161616] cursor-default text-gray-400 hover:text-white p-6 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-gray-300">
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
