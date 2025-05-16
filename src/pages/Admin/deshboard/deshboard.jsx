import React, { useContext, useState } from "react";
import Layout from "../../../components/layout/Layout";
import MyContext from "../../../context/data/MyContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const context = useContext(MyContext);
  const { rules, handleRoleChange, user, product } = context;
  const userRules = rules;

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingRoleChange, setPendingRoleChange] = useState(null);

  const products = product;

  const orders = [
    { id: 1, user: "Azman", product: "Product 1", status: "Shipped" },
    { id: 2, user: "Snigdho", product: "Product 2", status: "Pending" },
  ];

  const handleDelete = (id, type) => {
    toast.success(`Deleted ${type} with ID: ${id}`);
  };

  const requestRoleChange = (userId, newRole) => {
    setPendingRoleChange({ userId, newRole });
    setShowConfirmModal(true);
  };

  const confirmRoleChange = async () => {
    if (pendingRoleChange) {
      try {
        await handleRoleChange(
          pendingRoleChange.userId,
          pendingRoleChange.newRole
        );
        toast.success("User role updated successfully!");
      } catch (error) {
        toast.error("Failed to update user role.");
      }
    }
    setShowConfirmModal(false);
    setPendingRoleChange(null);
  };

  const cancelRoleChange = () => {
    toast.info("Cancelled role change.");
    setShowConfirmModal(false);
    setPendingRoleChange(null);
  };

  const renderTable = (data, type) => {
    if (type === "users") {
      if (userRules !== "admin") {
        return (
          <p className="text-red-400">
            You are not authorized to view this section.
          </p>
        );
      }

      return (
        <Table headers={["No.", "Name", "Email", "Date", "Role"]}>
          {user.map((user, inx) => (
            <tr
              key={user.id}
              className="hover:bg-[#1e1e1e] transition-all duration-300"
            >
              <td className="py-2 px-4">{inx + 1}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                {user.time.toDate().toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="py-2 px-4">
                <select
                  className="bg-[#2a2a2a] cursor-pointer text-gray-400 rounded px-2 py-1"
                  value={user.rules}
                  onChange={(e) => requestRoleChange(user.id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </Table>
      );
    }

    if (type === "products") {
      return (
        <div>
          <Link to={"/addproducts"}>
            <button className="mb-4 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer">
              + Add Product
            </button>
          </Link>
          <Table
            headers={[
              "No.",
              "Product Image",
              "Product Name",
              "Price",
              "OP",
              "Date",
              "Rating/Review",
              "Actions",
            ]}
          >
            {data.map((product, inx) => (
              <tr
                key={product.id}
                className="hover:bg-[#1e1e1e] transition-all duration-300"
              >
                <td className="py-2 px-4">{inx + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-12 h-12 rounded"
                  />
                </td>
                <td className="py-2 px-4">{product.title}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.originalPrice}</td>
                <td className="py-2 px-4">2025-05-07</td>
                <td className="py-2 px-4">5★ (150)</td>
                <td className="py-2 px-4">
                  <Link to={"/updateproducts"}>
                    <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id, "product")}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      );
    }

    if (type === "orders") {
      return (
        <Table headers={["No.", "Customer", "Product", "Status"]}>
          {data.map((order, inx) => (
            <tr
              key={order.id}
              className="hover:bg-[#1e1e1e] transition-all duration-300"
            >
              <td className="py-2 px-4">{inx + 1}</td>
              <td className="py-2 px-4">{order.user}</td>
              <td className="py-2 px-4">{order.product}</td>
              <td className="py-2 px-4">{order.status}</td>
            </tr>
          ))}
        </Table>
      );
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#161616] text-gray-400 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in">
          OnlyBlack Dashboard
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/5 bg-[#1e1e1e] rounded-2xl p-4 shadow-md">
            <div className="flex flex-col gap-4">
              {["users", "products", "orders", "faqs", "testimonial"].map(
                (tab) => {
                  const label =
                    tab === "users"
                      ? `Users (${user.length})`
                      : tab.charAt(0).toUpperCase() + tab.slice(1);
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full py-2 px-4 rounded-lg text-left font-medium transition-all duration-300 cursor-pointer border-2 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow border-transparent"
                          : "bg-[#2a2a2a] text-gray-400 hover:bg-[#333] border-transparent"
                      }`}
                    >
                      {label}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="w-full lg:w-4/5 bg-black rounded-2xl p-6 shadow-xl overflow-x-auto animate-fade-in">
            {renderTable(
              activeTab === "users"
                ? user
                : activeTab === "products"
                ? products
                : orders,
              activeTab
            )}
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1e1e1e] p-6 rounded-xl text-center max-w-sm w-full shadow-lg">
              <p className="text-white text-lg mb-4">
                Are you sure you want to change this user's role?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={cancelRoleChange}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRoleChange}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const Table = ({ headers, children }) => (
  <table className="min-w-full text-left text-sm text-gray-400">
    <thead className="bg-[#121212] text-gray-400 uppercase">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="px-4 py-3">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default Dashboard;
