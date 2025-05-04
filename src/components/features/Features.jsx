import React from "react";
import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    price: 100,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    price: 200,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: 300,
    image: "https://m.media-amazon.com/images/I/31WY58YOvJL._AC_.jpg",
  },
];
const Features = () => {
  return (
    <div className="bg-dark">
      <h1 className="p-12 text-4xl font-bold text-gray-400 mb-10 UpSh text-center">
        Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 md:px-10 mx-auto">
        {product.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="border p-4 shadow-lg bg-[#161616] border-[#353535] mx-auto rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-65 object-center mb-2 text-white rounded-xl"
            />
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="text-white">{item.description}</p>
            <p className="text-lg font-bold text-white">৳ {item.price}</p>

            <div className="flex items-center mt-4">
              <button className="bg-gray-400 active:bg-gray-500 p-2 rounded-2xl cursor-pointer mr-3">
                Add to Wishlist
              </button>
              <button className="bg-gray-500 active:bg-gray-400 p-2 rounded-2xl cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 py-15">
        <Link
          to={"/shop"}
          className=" bg-gray-400 px-3 py-1 rounded-2xl cursor-pointer active:bg-gray-500 font-bold "
        >
          All Product...
        </Link>
      </div>
    </div>
  );
};

export default Features;
