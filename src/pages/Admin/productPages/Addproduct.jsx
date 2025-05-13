import React, { useContext, useState } from "react";
import myContext from "../../../context/data/MyContext";
import { PlusCircle } from "lucide-react";
import Layout from "../../../components/layout/Layout";

function AddProduct() {
  const context = useContext(myContext);
  const { addProduct } = context;

  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
  });

  return (
    <Layout>
      <div className="min-h-screen bg-[#1e1e1e] flex justify-center items-center px-4 py-10">
        <div className="bg-[#161616] px-6 sm:px-10 py-10 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-500">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-400 tracking-wide">
              Add New Product
            </h1>
            <p className="text-gray-400 mt-1 text-sm">
              Fill all the product details below
            </p>
          </div>

          <div className="space-y-4">
            <InputField
              label="Title"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              placeholder="Product title"
            />

            <InputField
              label="Price"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              placeholder="Product price"
            />

            <InputField
              label="Image URL"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              placeholder="Product image URL"
            />

            <InputField
              label="Category"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              placeholder="Product category"
            />

            <div>
              <label className="text-gray-300 text-sm mb-1 block ml-1">
                Description
              </label>
              <textarea
                rows="4"
                value={products.description}
                onChange={(e) =>
                  setProducts({ ...products, description: e.target.value })
                }
                placeholder="Product description"
                className="bg-[#161616] border border-gray-700 text-gray-200 placeholder:text-gray-500 px-3 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-600 resize-none"
              ></textarea>
            </div>

            <button
              onClick={() => addProduct(products)}
              className="bg-black text-gray-400 font-semibold w-full flex items-center justify-center gap-2 py-2.5 rounded-lg hover:bg-[#0a0a0a] cursor-pointer transition duration-300"
            >
              <PlusCircle className="w-5 h-5" />
              Add Product
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;

// Reusable InputField Component
const InputField = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="text-gray-300 text-sm mb-1 block ml-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#161616] border border-gray-700 text-gray-200 placeholder:text-gray-500 px-3 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
);
