import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import MyContext from "../../context/data/MyContext";

// Local Storage
const user = JSON.parse(localStorage.getItem("user"));

const Features = () => {
  const context = useContext(MyContext);
  const { product } = context;

  return (
    <div className="bg-dark min-h-screen pb-10">
      <h1 className="p-12 text-4xl font-bold text-gray-400 mb-10 UpSh text-center">
        Featured
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10">
        {product.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-4 bg-[#161616] border border-[#353535] rounded-2xl p-4 shadow-lg"
          >
            <img
              src={item.imageUrl}
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
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={"/shop"}
          className="bg-[#161616] text-white border border-gray-600 px-4 py-2 rounded-2xl focus:outline-none w-80 text-center  active:bg-gray-500 font-bold "
        >
          All Products...
        </Link>
      </div>
    </div>
  );
};

export default Features;
