"use client";
import Link from "next/link";
import { useEffect } from "react";
import CartItem from "@/components/cart/CartItem";
import { useCart } from "@/context/cartContext";

export default function CartPage() {
  const { cartData, handleQuantityChange, fetchCartItems } = useCart();

  useEffect(() => {
    fetchCartItems(); // Ensure latest cart state
  }, []);

  const handleMoveToWishlist = (id) => {
    console.log(`Move product with ID ${id} to wishlist`);
  };

  const handleDelete = (id) => {
    console.log("item has been deleted");
  };

  return (
    <div className="container mt-6 mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        Shopping Cart
      </h2>

      {/* Conditional Rendering for Cart Items */}
      {cartData && cartData.length > 0 ? (
        <>
          <div className="space-y-6">
            {cartData.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onMoveToWishlist={handleMoveToWishlist}
                onDelete={handleDelete}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* Total and Checkout Section */}
          <div className="mt-10 flex justify-between items-center border-t pt-4">
            {/* Total Price */}
            <p className="text-xl font-semibold text-gray-700">
              Total: $
              {cartData
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            {/* Checkout Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 shadow-lg transition-all">
              Check Out
            </button>
          </div>
        </>
      ) : (
        // Empty Cart Message
        <div className="text-center py-12">
          <h3 className="text-2xl font-semibold text-gray-600">
            Your Cart is Empty
          </h3>
          <p className="text-gray-500 mt-2">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 shadow"
          >
            Go to Shop
          </Link>
        </div>
      )}
    </div>
  );
}
