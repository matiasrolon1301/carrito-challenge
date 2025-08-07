import { Product } from "@/types";
import React from "react";

interface Props {
  product: Product;
  onAdd: (id: number) => void;
}

export const ProductCard = ({ product, onAdd }: Props) => {
  const { id, name, price } = product;

  return (
    <div
      key={id}
      className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-1 rounded cursor-pointer"
        onClick={() => onAdd(id)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
