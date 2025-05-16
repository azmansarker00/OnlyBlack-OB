import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfiq";

function ProductInfo() {
  const [products, setProducts] = useState("");
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const getProductData = async () => {
    setLoading(true);
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

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          {products && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="flex flex-col">
                <img
                  alt="ecommerce"
                  className="w-120 h-120 object-cover object-center rounded-4xl border border-gray-200 p-10"
                  src={products.imageUrl}
                />
                <div className="flex justify-around mt-5">
                  <span className="title-font font-bold text-2xl">
                    {products.price} TK
                  </span>

                  <div className="flex mb-4">
                    <span className="flex items-center">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const ratingValue = idx + 1;
                        return (
                          <svg
                            key={idx}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={
                              ratingValue <= Math.round(products.rating)
                                ? "currentColor"
                                : "none"
                            }
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5 text-orange-400"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        );
                      })}
                      <span className="text-gray-600 ml-2">
                        ({products.totalRatings} Reviews)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  E- MART
                </h2>
                <h1 className="text-2xl title-font font-medium mb-1">
                  {products.title}
                </h1>

                <span className="text-gray-400 mt-28">Description</span>
                <p className="leading-relaxed text-[12px] border-b-2 mb-5 pb-5">
                  {products.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
