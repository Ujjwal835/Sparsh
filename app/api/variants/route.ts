import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const variant = await prisma.productVariant.create({
      data: {
        productId: body.productId,
        size: body.size,
        color: body.color,
        sku: body.sku,
        price: body.price,
        comparePrice: body.comparePrice,
        stock: body.stock,
      },
    })

    return NextResponse.json(variant)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create variant' },
      { status: 500 }
    )
  }
}