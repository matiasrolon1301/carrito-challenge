import { Product } from "@/types"

export function findBestCombination(products: Product[], budget: number): Product[] {
  let best: Product[] = []

  function search(current: Product[], index: number) {
    const total = current.reduce((sum, p) => sum + p.price, 0)
    if (total > budget) return
    if (total > best.reduce((sum, p) => sum + p.price, 0)) {
      best = [...current]
    }
    for (let i = index; i < products.length; i++) {
      search([...current, products[i]], i + 1)
    }
  }

  search([], 0)
  return best
}
