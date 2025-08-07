import { Product } from '@/types/product'
import { NextResponse } from 'next/server'

export const products: Product[] = [
  { id: 1, name: 'Remera Básica', price: 100 },
  { id: 2, name: 'Buzo con Capucha', price: 250 },
  { id: 3, name: 'Gorra Deportiva', price: 150 },
  { id: 4, name: 'Mochila Escolar', price: 300 },
  { id: 5, name: 'Remera Estampada', price: 180 },
  { id: 6, name: 'Pantalón Cargo', price: 350 },
  { id: 7, name: 'Campera Impermeable', price: 500 },
  { id: 8, name: 'Zapatillas Urbanas', price: 450 },
]


export async function GET() {
  return NextResponse.json(products)
}
