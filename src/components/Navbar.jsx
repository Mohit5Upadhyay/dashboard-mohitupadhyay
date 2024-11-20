import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-row justify-between bg-card p-4 border-b border-border">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <input
        type="text"
        placeholder="Search..."
        className="border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
          Settings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
