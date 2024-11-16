import React from "react";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";

const CartItem = ({
  product,
  onMoveToWishlist,
  onDelete,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product Image */}
      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 px-4">
        <h3 className="text-md font-bold text-gray-800">{product.name}</h3>
        <span className="text-blue-600 font-semibold">
          ${(product.price * product.quantity).toFixed(2)}
        </span>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center space-x-2 px-4 ">
        <label htmlFor={`quantity-${product.id}`} className="text-gray-600">
          Qty:
        </label>
        <input
          id={`quantity-${product.id}`}
          type="number"
          min="1"
          value={product.quantity}
          onChange={(e) =>
            onQuantityChange(product.id, parseInt(e.target.value))
          }
          className="w-16 px-2 py-1 border rounded text-center"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        {/* Move to Wishlist */}
        <button
          onClick={() => onMoveToWishlist(product.id)}
          className="flex items-center px-3 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
        >
          <AiOutlineHeart className="mr-2 text-lg" />
          Move to Wishlist
        </button>

        {/* Delete Item */}
        <button
          onClick={() => onDelete(product.id)}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          <AiOutlineDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
