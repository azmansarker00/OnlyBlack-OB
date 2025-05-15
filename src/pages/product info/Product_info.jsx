import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaHeart } from "react-icons/fa";
import Layout from "../../components/layout/Layout";
import { fireDB } from "../../firebase/FirebaseConfiq";
import { doc, getDoc } from "firebase/firestore";

const Productinfo = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const [products, setProducts] = useState("");

  const getProductData = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Product not found.
      </div>
    );
  }

  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const otherProducts = products.filter((p) => p.category !== product.category);

  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  const suggested = [...sameCategory.slice(0, 10), ...shuffled].slice(0, 20);

  const user = JSON.parse(localStorage.getItem("user"));

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
                {user ? (
                  <button
                    onClick={addToWishlist}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaHeart />
                  </button>
                ) : (
                  <button className="text-gray-500 hover:text-red-500">
                    <Link to={"/login"}>
                      <FaHeart />
                    </Link>
                  </button>
                )}
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
            {user ? (
              <button className="bg-gray-400 mr-3 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                Add to Cart
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-gray-400 mr-3 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                  Add to Cart
                </button>
              </Link>
            )}

            {user ? (
              <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                Buy now
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-gray-400 active:bg-gray-500 cursor-pointer text-black px-3 py-1 rounded-2xl">
                  Buy now
                </button>
              </Link>
            )}
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
