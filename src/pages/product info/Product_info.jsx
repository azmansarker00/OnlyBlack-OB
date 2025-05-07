import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaHeart } from "react-icons/fa";
import Layout from "../../components/layout/Layout";

const Productinfo = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const productsData = [
    {
      id: 1,
      title: "Quant Olap Shirts",
      image: "https://i.imgur.com/QpjAiHq.jpg",
      price: 13.99,
      originalPrice: 20.99,
      category: "Shirts",
      description:
        "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
      rating: 1,
      reviews: 310,
    },
    {
      id: 2,
      title: "Quant Trident Shirts",
      image: "https://i.imgur.com/JvPeqEF.jpg",
      price: 14.99,
      originalPrice: 20.99,
      category: "Shirts",
      description:
        "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
      rating: 5,
      reviews: 310,
    },
    {
      id: 3,
      title: "Quant Ruybi T-Shirts",
      image: "https://i.imgur.com/Bf4dIaN.jpg",
      price: 13.99,
      originalPrice: 20.99,
      category: "T-Shirts",
      description:
        "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
      rating: 4,
      reviews: 123,
    },
    {
      id: 4,
      title: "Quant Tinor Pants",
      image: "https://i.imgur.com/HO8e9b8.jpg",
      price: 15.99,
      originalPrice: 21.99,
      category: "Pants",
      description:
        "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
      rating: 4.5,
      reviews: 110,
    },
    {
      id: 5,
      title: "Quant Tinor So close. Not quite the 32/28 I'm looking for.",
      image:
        "https://i.imgur.com/f9Q8oDh_d.webp?maxwidth=520&shape=thumb&fidelity=high",
      price: 17.77,
      originalPrice: 17.77,
      category: "Cloths",
      description:
        "100% cotton • Light weight • Best finish • Unique design • For men • Casual",
      rating: 3,
      reviews: 10,
    },
    // Add more dummy products to reach at least 20
    {
      id: 6,
      title: "Casual Cool Shirt",
      image: "https://i.imgur.com/Bf4dIaN.jpg",
      price: 16.5,
      originalPrice: 18.0,
      category: "Shirts",
      description: "Casual wear for everyday use",
      rating: 4,
      reviews: 99,
    },
    {
      id: 7,
      title: "Summer T-Shirts",
      image: "https://i.imgur.com/QpjAiHq.jpg",
      price: 11.99,
      originalPrice: 13.5,
      category: "T-Shirts",
      description: "Comfortable and breathable",
      rating: 4.2,
      reviews: 67,
    },
    {
      id: 8,
      title: "Classic Fit Pants",
      image: "https://i.imgur.com/HO8e9b8.jpg",
      price: 19.5,
      originalPrice: 22,
      category: "Pants",
      description: "Elegant and modern style",
      rating: 4.7,
      reviews: 143,
    },
    {
      id: 9,
      title: "Vibrant Tee",
      image: "https://i.imgur.com/JvPeqEF.jpg",
      price: 13.75,
      originalPrice: 15.0,
      category: "T-Shirts",
      description: "Bright and bold colors",
      rating: 4.3,
      reviews: 78,
    },
    {
      id: 10,
      title: "Urban Pants",
      image: "https://i.imgur.com/HO8e9b8.jpg",
      price: 18.99,
      originalPrice: 23,
      category: "Pants",
      description: "Urban style and durable fabric",
      rating: 4,
      reviews: 122,
    },
    {
      id: 11,
      title: "Basic T-Shirts",
      image: "https://i.imgur.com/Bf4dIaN.jpg",
      price: 9.99,
      originalPrice: 12.99,
      category: "T-Shirts",
      description: "Simple and clean look",
      rating: 3.9,
      reviews: 55,
    },
    {
      id: 12,
      title: "Linen Pants",
      image: "https://i.imgur.com/f9Q8oDh_d.webp",
      price: 20.0,
      originalPrice: 25.0,
      category: "Pants",
      description: "Breezy and stylish",
      rating: 4.6,
      reviews: 70,
    },
    // ...you can add more for realism
  ];

  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Product not found.
      </div>
    );
  }

  const sameCategory = productsData.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const otherProducts = productsData.filter(
    (p) => p.category !== product.category
  );

  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  const suggested = [...sameCategory.slice(0, 10), ...shuffled].slice(0, 20);

  // Function to refresh the page
  const handleAddToCart = () => {
    // Your logic to add the product to the cart
    window.location.reload(); // Refresh the page
  };

  const handleAddToWishlist = () => {
    // Your logic to add the product to the wishlist
    window.location.reload(); // Refresh the page
  };

  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-[#161616] border border-[#353535] rounded-xl shadow-lg p-6 mb-12">
          <div className="text-sm text-gray-500 mb-4">
            HOME / {product.category?.toUpperCase()}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-xs object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-400">
                  {product.title}
                </h2>
                <button
                  onClick={addToWishlist}
                  className="text-gray-500 hover:text-red-500"
                >
                  <FaHeart />
                </button>
              </div>
              <p className="text-gray-500">{product.description}</p>
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {product.rating % 1 !== 0 && <FaStarHalfAlt />}
                <span className="text-gray-500 ml-2 text-sm">
                  {product.reviews} Reviews
                </span>
              </div>
              <div className="text-lg text-gray-400">
                <span className="font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice !== product.price && (
                  <span className="line-through text-gray-500 ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAddToWishlist}
              className="bg-gray-500 cursor-pointer text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-gray-500 cursor-pointer text-black ml-5 font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Buy now
            </button>
          </div>
        </div>

        {/* Suggested Products */}
        <h3 className="text-2xl font-bold text-white mb-6">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {suggested.map((item) => (
            <Link
              to={`/singlepage/${item.id}`}
              key={item.id}
              className="cursor-pointer bg-[#1f1f1f] border border-[#333] rounded-lg p-3 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain rounded"
              />
              <h4 className="mt-2 text-gray-300 font-medium">{item.title}</h4>
              <p className="text-gray-500 mt-1">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Productinfo;
