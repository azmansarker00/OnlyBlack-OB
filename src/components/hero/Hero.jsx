import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-[#161616] mt-1 overflow-hidden">
      <div className="bg-black rounded-2xl animate-fade-slide-up">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-200 sm:text-5xl mb-4">
              Welcome to <strong>OnlyBlack</strong>
            </h1>

            <p className="text-base text-pretty text-gray-400 sm:text-lg/relaxed">
              The first-ever website dedicated to black lovers — where every
              product is black. From fashion to lifestyle, we bring all your
              favorite black items together in one place. As our name says, it's
              all black, everything.
            </p>

            <div className="mt-6 flex justify-center gap-4 animate-scale-in">
              <Link
                to="/shop"
                className="inline-block rounded border border-black bg-gray-400 px-5 py-3 font-medium text-black shadow-sm transition hover:bg-gray-500"
              >
                Shop
              </Link>

              <Link
                to="/about"
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
