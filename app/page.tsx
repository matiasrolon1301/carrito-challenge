"use client";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { CartItem, Product } from "@/types";
import OptimalComboPanel from "./components/OptimalComboCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);

    const cachedCart = localStorage.getItem("cart");
    if (cachedCart) {
      setCart(JSON.parse(cachedCart));
    } else {
      fetch("/api/cart")
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
          localStorage.setItem("cart", JSON.stringify(data));
        });
    }
  }, []);

  const addToCart = async (id: number) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedCart = await res.json();
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = async () => {
    await fetch("/api/cart", { method: "DELETE" });

    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Navbar cart={cart} onClearCart={clearCart} />

      <main className="max-w-7xl mx-auto p-6 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:sticky lg:top-24 lg:w-72 flex-shrink-0">
            <OptimalComboPanel products={products} />
          </div>

          <div className="flex-1">
            <ProductList products={products} onAdd={addToCart} />
          </div>
        </div>
      </main>
    </>
  );
}
