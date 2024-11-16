import React from "react";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ product, addToCartHandler }) => {
  return (
    <>
      <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <Link href={`/product/${product.id}`}>
          {/* Product Image */}
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-500 mt-1">{product.description}</p>
          <div className="mt-3">
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
          <div className="mt-4 flex space-x-4">
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCartHandler(product.id)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <AiOutlineShoppingCart className="mr-2 text-lg" />
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
              <AiOutlineHeart className="mr-2 text-lg" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
