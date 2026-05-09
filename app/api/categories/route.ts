import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import slugify from 'slugify'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const category = await prisma.category.create({
      data: {
        name: body.name,
        slug: slugify(body.name, { lower: true }),
        parentId: body.parentId || null,
      },
    })

    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  }
}

export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      children: true,
    },
  })

  return NextResponse.json(categories)
}