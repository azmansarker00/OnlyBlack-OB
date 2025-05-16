import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

const initialProducts = [
  {
    id: 1,
    name: "Lorem Ipsum dolor",
    image: "assets/img/image.jpg",
    specs: {
      Display: "5 inch",
      RAM: "4GB",
      Memory: "32GB",
    },
    price: 120,
    quantity: 1,
  },
  {
    id: 2,
    name: "Lorem Ipsum dolor",
    image: "assets/img/image.jpg",
    specs: {
      Display: "5 inch",
      RAM: "4GB",
      Memory: "32GB",
    },
    price: 120,
    quantity: 1,
  },
  {
    id: 3,
    name: "Lorem Ipsum dolor",
    image: "assets/img/image.jpg",
    specs: {
      Display: "5 inch",
      RAM: "4GB",
      Memory: "32GB",
    },
    price: 120,
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, change) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const subtotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <main className="bg-[#161616] min-h-screen py-10 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-400">Shopping Cart</h2>
            <p className="max-w-xl mx-auto text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-black text-gray-400 shadow p-4 rounded-xl flex flex-col md:flex-row gap-4 transition duration-300 transform hover:scale-[1.01]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="text-sm mt-2 space-y-1">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                            {key}: <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="px-2 py-1 bg-[#161616] hover:bg-gray-500 text-white rounded"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={product.quantity}
                          className="w-16 px-2 py-1 border rounded text-center bg-[#161616]"
                          readOnly
                        />
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="px-2 py-1 bg-[#161616] hover:bg-gray-500 text-white rounded"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-2xl font-bold">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black rounded-xl p-6 border-t-4 border-gray-500 text-gray-400 transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-center mb-6">
                Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-4 border-gray-300">
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-[#161616] hover:bg-gray-900 cursor-pointer text-white font-semibold rounded-xl transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ShoppingCart;
