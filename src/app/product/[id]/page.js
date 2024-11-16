"use client";

import ProductDisplayPage from "@/components/product/ProductDisplay";
import { products } from "@/data/products";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const { addToCartHandler } = useCart();

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      const foundProduct = products.find(
        (p) => p.id == parseInt(resolvedParams.id)
      );
      setProduct(foundProduct);
    }

    resolveParams();
  }, [params]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while resolving params
  }

  return (
    <ProductDisplayPage product={product} addToCartHandler={addToCartHandler} />
  );
}
