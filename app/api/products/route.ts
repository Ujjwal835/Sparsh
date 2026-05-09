import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug: slugify(body.name, { lower: true }),
        description: body.description,
        brand: body.brand,
        gender: body.gender,
        categoryId: body.categoryId,

        images: {
          create: body.images.map((url: string, index: number) => ({
            url,
            sortOrder: index,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}
