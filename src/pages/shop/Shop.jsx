import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const productsData = [
  {
    id: 1,
    title: "Quant Olap Shirts",
    image: "https://i.imgur.com/QpjAiHq.jpg",
    price: 13.99,
    originalPrice: 20.99,
    description:
      "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
    rating: 4,
    reviews: 310,
    category: "Shirts",
  },
  {
    id: 2,
    title: "Quant Trident Shirts",
    image: "https://i.imgur.com/JvPeqEF.jpg",
    price: 14.99,
    originalPrice: 20.99,
    description:
      "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
    rating: 4,
    reviews: 310,
    category: "Shirts",
  },
  {
    id: 3,
    title: "Quant Ruybi Shirts",
    image: "https://i.imgur.com/Bf4dIaN.jpg",
    price: 13.99,
    originalPrice: 20.99,
    description:
      "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
    rating: 4,
    reviews: 123,
    category: "Shirts",
  },
  {
    id: 4,
    title: "Quant Tinor Shirts",
    image: "https://i.imgur.com/HO8e9b8.jpg",
    price: 15.99,
    originalPrice: 21.99,
    description:
      "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
    rating: 4,
    reviews: 110,
    category: "Shirts",
  },
];

const Shop = () => {
  const [category, setCategory] = useState("All");

  const availableCategories = [
    "All",
    ...new Set(productsData.map((item) => item.category)),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("default");

  const filteredProducts = productsData
    .filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "low") return a.price - b.price;
      if (filter === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Layout>
      <div className="bg-dark min-h-screen pb-10 px-4 sm:px-6 md:px-10">
        <h1 className="pt-12 text-4xl font-bold text-gray-400 mb-6 text-center">
          Shop
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-1/2 text-gray-600">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2.5 mr-4"
              aria-label="Search"
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="512"
                height="512"
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
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 bg-[#161616] border border-[#353535] rounded-2xl p-4 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-48 h-48 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  <div className="flex items-center text-yellow-400 mb-1">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <i key={i} className="fa fa-star mr-1" />
                    ))}
                    <span className="text-sm text-gray-300 ml-1">
                      ({item.reviews})
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
                  <p className="text-green-400 text-sm mb-3">Free shipping</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                      Details
                    </button>
                    <button className="bg-gray-500 active:bg-gray-400 cursor-pointer text-black px-3 py-1 rounded-2xl">
                      Add to Wishlist
                    </button>
                    <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
