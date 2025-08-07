'use client'

import { Product } from '@/types'
import { findBestCombination } from '@/utils/findBestCombo'
import { useState } from 'react'

type Props = {
  products: Product[]
}

export default function OptimalComboCard({ products }: Props) {
  const [budget, setBudget] = useState(100)
  const [result, setResult] = useState<Product[]>([])

  const handleCalculate = () => {
    const best = findBestCombination(products, budget)
    setResult(best)
  }

  const total = result.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-xs border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Combinación Óptima</h2>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-600">Presupuesto ($)</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          className="w-full border rounded-md px-3 py-1.5 mt-1 text-sm"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Calcular
      </button>

      {result.length > 0 && (
        <div className="mt-4 text-sm">
          <h3 className="font-medium text-gray-700 mb-2">Mejor combinación:</h3>
          <ul className="space-y-1">
            {result.map((p) => (
              <li key={p.id} className="flex justify-between border-b pb-1 text-gray-700">
                <span>{p.name}</span>
                <span>${p.price}</span>
              </li>
            ))}
          </ul>
          <div className="text-right font-semibold text-gray-800 pt-2 border-t mt-2">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  )
}
