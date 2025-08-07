'use client'

import { ProductCard } from "./ProductCard"

type Product = {
  id: number
  name: string
  price: number
}

interface Props {
  products: Product[]
  onAdd: (id: number) => void
}

export default function ProductList({ products, onAdd }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard  key={p.id} onAdd={onAdd} product={p}/>
        ))}
      </div>
    </div>
  )
}
