"use client";
import { useState } from "react";
import SideCart from "./SideCart";
import { CartItem } from "@/types/cart";

export interface Props {
  cart: CartItem[];
  onClearCart: () => void;
}

export default function Navbar({ cart, onClearCart }: Props) {
  const [open, setOpen] = useState(false);

  const toggleCart = () => setOpen(!open);

  return (
    <>
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">Mi Tienda</h1>
        <button onClick={toggleCart} className="relative cursor-pointer">
          <span className="text-2xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </header>
      <SideCart
        open={open}
        onClose={toggleCart}
        cart={cart}
        onClearCart={onClearCart}
      />
    </>
  );
}
