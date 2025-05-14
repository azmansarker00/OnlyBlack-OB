import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";

// context
import MyContext from "../../context/data/MyContext";

const Shop = () => {
  const context = useContext(MyContext);
  const { product } = context;

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const searchFiltered = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const uniqueCategories = [
    ...new Set(searchFiltered.map((product) => product.category)),
  ];

  const filteredProducts = searchFiltered
    .filter((item) =>
      selectedCategory === "all" ? true : item.category === selectedCategory
    )
    .sort((a, b) => {
      if (filter === "low") return a.price - b.price;
      if (filter === "high") return b.price - a.price;
      return 0;
    });

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout>
      <div className="bg-dark min-h-screen pb-10 px-4 sm:px-6 md:px-10">
        <h1 className="pt-12 text-4xl font-bold text-gray-400 mb-6 text-center">
          Shop
        </h1>

        {/* Search + Filter + Category */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full md:w-1/2 text-gray-600">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#161616] h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none placeholder:text-white"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2.5 mr-4"
              aria-label="Search"
            >
              <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786
                  c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23
                  c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208
                  c0.571,0.593,1.339,0.92,2.162,0.92
                  c0.779,0,1.518-0.297,2.079-0.837
                  C56.255,54.982,56.293,53.08,55.146,51.887z
                  M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>

          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="bg-[#161616] text-white border border-gray-600 px-4 py-2 rounded-2xl focus:outline-none"
          >
            <option value="all">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="bg-[#161616] text-white border border-gray-600 px-4 py-2 rounded-2xl focus:outline-none"
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-4 bg-[#161616] border border-[#353535] rounded-2xl p-4 shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {item.title}
                    </h2>
                    <div className="flex items-center text-yellow-400 mb-1">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <i key={i} className="fa fa-star mr-1" />
                      ))}
                      <span className="text-sm text-red-500 ml-1">
                        Rating 10/{item.rating}
                      </span>
                      <span className="text-sm text-gray-400 ml-1">-</span>
                      <span className="text-sm text-yellow-600 ml-1">
                        Reviews({item.reviews})
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="text-lg font-bold text-white">
                        TK {item.price}
                      </h4>
                      <span className="line-through text-sm text-gray-400">
                        TK {item.originalPrice}
                      </span>
                    </div>
                    <p className="text-green-400 text-sm mb-3 line-through">
                      Free shipping
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <button
                        onClick={() =>
                          (window.location.href = `/singlepage/${item.id}`)
                        }
                        className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl"
                      >
                        Details
                      </button>
                      <button className="bg-gray-500 active:bg-gray-400 cursor-pointer text-black px-3 py-1 rounded-2xl">
                        Add to Wishlist
                      </button>
                      {user ? (
                        <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                          Add to Cart
                        </button>
                      ) : (
                        <Link to="/login">
                          <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                            Add to Cart
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
