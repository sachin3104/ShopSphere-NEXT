"use client";
import { useState, useEffect } from "react";
import Product from "@/components/product/Product";
import { useCart } from "@/context/cartContext";
// import { products } from "@/data/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCartHandler } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={() => addToCartHandler(products.id, product)}
          />
        ))}
      </div>
    </>
  );
}
