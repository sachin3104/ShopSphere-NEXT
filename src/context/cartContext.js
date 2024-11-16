"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  async function fetchCartItems() {
    try {
      const response = await fetch("api/cart");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setCartData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCartItems();
  }, []);

  async function addToCartHandler(id, product) {
    const data = { ...product, quantity: 1 }; // Ensure quantity is included
    console.log("Adding to cart:", data); // Debug payload

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("API Error:", error);
        throw new Error("Failed to add product to cart");
      }

      const savedItem = await response.json();
      console.log("Product successfully added to cart:", savedItem);
      setCartData((prevData) => [...prevData, savedItem]); // Update local state
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
    }
  }

  const handleQuantityChange = (id, newQuantity) => {
    setCartData((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCartHandler,
        fetchCartItems,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
