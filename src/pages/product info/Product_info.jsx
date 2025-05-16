import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaHeart } from "react-icons/fa";
import Layout from "../../components/layout/Layout";
import { fireDB } from "../../firebase/FirebaseConfiq";
import { doc, getDoc } from "firebase/firestore";
import MyContext from "../../context/data/MyContext";

const Productinfo = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggested, setSuggested] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const context = useContext(MyContext);
  const { product: allProducts, addToCart } = context;

  const getProductData = async () => {
    setLoading(true);
    try {
      const docRef = doc(fireDB, "products", id);
      const productDoc = await getDoc(docRef);
      if (productDoc.exists()) {
        setProductData({ id: productDoc.id, ...productDoc.data() });
      } else {
        setProductData(null);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  useEffect(() => {
    if (productData && allProducts.length > 0) {
      const sameCategory = allProducts.filter(
        (p) => p.category === productData.category && p.id !== productData.id
      );

      const otherProducts = allProducts.filter(
        (p) => p.category !== productData.category
      );

      const shuffledOther = [...otherProducts].sort(() => 0.5 - Math.random());

      const maxSameCategory = sameCategory.slice(0, 10);
      const remaining = 20 - maxSameCategory.length;

      const combinedSuggestions = [
        ...maxSameCategory,
        ...shuffledOther.slice(0, remaining),
      ];

      setSuggested(combinedSuggestions);
    }
  }, [productData, allProducts]);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (!productData) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Product not found.
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-[#161616] border border-[#353535] rounded-xl shadow-lg p-6 mb-12">
          <div className="text-sm text-gray-500 mb-4">
            HOME / {productData.category?.toUpperCase()}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                src={productData.image || productData.imageUrl}
                alt={productData.title}
                className="w-full max-w-xs object-contain rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-400">
                  {productData.title}
                </h2>
                {user ? (
                  <button className="text-gray-500 hover:text-red-500">
                    <FaHeart />
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaHeart />
                  </Link>
                )}
              </div>
              <p className="text-gray-500">{productData.description}</p>
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(Math.floor(productData.rating || 0))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {productData.rating % 1 !== 0 && <FaStarHalfAlt />}
                <span className="text-gray-500 ml-2 text-sm">
                  ({productData.totalRatings || productData.reviews || 0}{" "}
                  Reviews)
                </span>
              </div>
              <div className="text-lg text-gray-400">
                <span className="font-semibold">
                  ${parseFloat(productData.price).toFixed(2)}
                </span>
                {productData.originalPrice &&
                  productData.originalPrice !== productData.price && (
                    <span className="line-through text-gray-500 ml-2">
                      ${parseFloat(productData.originalPrice).toFixed(2)}
                    </span>
                  )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            {user ? (
              <>
                <button
                  onClick={() => addToCart(id)}
                  className="bg-gray-400 mr-3 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl"
                >
                  Add to Cart
                </button>
                <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                  Buy now
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-gray-400 mr-3 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                    Add to Cart
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                    Buy now
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {suggested.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl text-white mb-4">You may also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {suggested.map((item) => (
                <Link
                  to={`/singlepage/${item.id}`}
                  key={item.id}
                  className="bg-[#161616] p-4 border border-[#353535] rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <img
                    src={item.image || item.imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-gray-300 text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">
                    TK {parseFloat(item.price).toFixed(2)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Productinfo;
