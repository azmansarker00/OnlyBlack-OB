import React from "react";

const Deshboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.user?.rules;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Common Section: Visible to both */}
      {(role === "admin" || role === "editor") && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">📋 Common Access</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>View Orders</li>
            <li>Edit Product Info</li>
          </ul>
        </div>
      )}

      {/* Admin-Only Section */}
      {role === "admin" && (
        <div>
          <h2 className="text-lg font-semibold mb-2">🛡️ Admin Access</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Manage Users</li>
            <li>View All Orders (including analytics)</li>
            <li>Add/Edit/Delete Products</li>
            <li>Access System Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Deshboard;
