"use client";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">E-Shop</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          {/* Wishlist */}
          <a
            href="/wishlist"
            className="text-gray-600 hover:text-blue-600 flex items-center"
          >
            <AiOutlineHeart className="text-2xl" />
          </a>
          {/* Shopping Cart */}
          <a
            href="/cart"
            className="relative text-gray-600 hover:text-blue-600 flex items-center"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
