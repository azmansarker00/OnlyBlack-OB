import React from "react";
import Layout from "../../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-400 pt-12">
        About
      </h1>
      <div className="min-h-screen text-gray-300 px-6 py-12 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex flex-col justify-center items-center lg:justify-end p-20 bg-[#161616] rounded-2xl">
            <h1 className="font-bold text-xl mb-2">Online Shoping</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1683796112978-fa4b9fa79e58?w=800&auto=format&fit=crop&q=80"
              alt="OnlyBlack Showcase"
              className="rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] w-full max-w-md object-cover aspect-video transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="bg-[#161616] bg-opacity-90 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-400">
              Welcome to <span className="text-gray-400">OnlyBlack</span>
            </h1>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              <strong>OnlyBlack</strong> isn’t just an online store — it’s a
              bold statement. We are the world’s first-ever platform dedicated
              to <em>pure black elegance</em>. Every product we showcase has one
              thing in common:{" "}
              <span className="font-semibold text-gray-500">
                Black. Just black.
              </span>
            </p>

            <p className="mb-8 text-sm sm:text-base text-gray-400">
              Whether you're obsessed with black fashion, minimalist
              accessories, or cutting-edge dark tech, we bring it all under one
              roof. Our curation is intentional, stylish, and deeply aesthetic.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "🖤 A Passion for Black",
                  desc: "Black is more than a color — it’s a personality, a voice, and a timeless classic. We exist for people who live that identity.",
                },
                {
                  title: "🌑 A Unified Visual Experience",
                  desc: "Our design language reflects our mission — minimal, clean, and consistently black. From visuals to vibes, everything syncs.",
                },
                {
                  title: "🛍️ Handpicked Exclusivity",
                  desc: "Each product is chosen with care. You won’t find noisy colors here — only the best of black, from fashion to function.",
                },
                {
                  title: "👤 Created by Black Lovers, for Black Lovers",
                  desc: "Founded with a vision to serve a niche community that shares a deep love for monochrome magic.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-black bg-opacity-10 hover:bg-opacity-20 transition duration-200"
                >
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
