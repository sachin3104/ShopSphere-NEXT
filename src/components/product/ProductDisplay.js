import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const ProductDisplayPage = ({ product, addToCartHandler }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Product Image */}
        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCartHandler(product.id, product)}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <AiOutlineShoppingCart className="mr-2 text-lg" />
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button className="flex items-center px-6 py-3 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">
              <AiOutlineHeart className="mr-2 text-lg" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayPage;
