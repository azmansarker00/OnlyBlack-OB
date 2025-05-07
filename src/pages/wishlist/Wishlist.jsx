import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "lucide-react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // Assuming you're getting user info from localStorage

  // Fetch wishlist from localStorage or an API
  useEffect(() => {
    // Only load wishlist if the user is logged in
    if (user) {
      const userWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(userWishlist);
    } else {
      setWishlist([]); // If no user, reset the wishlist state to empty
    }
  }, [user]); // Only trigger when 'user' changes

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  return (
    <Layout>
      <div className="bg-[#070707] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          {/* Wishlist Header */}
          <h2 className="text-3xl font-bold py-8 text-center">Your Wishlist</h2>

          {/* Wishlist Items */}
          {wishlist.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              <p>Your wishlist is empty.</p>
              <Link to="/shop" className="text-blue-500 underline">
                Browse products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-200 mt-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                  <p className="text-lg font-bold text-gray-200 mt-4">
                    ${item.price}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Product
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
