import { NextRequest, NextResponse } from 'next/server'
import { CartItem } from '@/types/cart'
import { products } from '@/data/products'

let cart: CartItem[] = []

export async function GET() {
  return NextResponse.json(cart)
}

export async function DELETE() {
  cart = []
  return Response.json(cart)
}

export async function POST(req: NextRequest) {
  const { id } = await req.json()
  const product = products.find(p => p.id === id)

  if (!product) {
    return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 })
  }

  const existing = cart.find(item => item.id === id)

  if (existing) {
    existing.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  return NextResponse.json(cart)
}
